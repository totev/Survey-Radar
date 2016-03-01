export default class Questions {

	constructor(g, cfg, questions, questionsStartRadiusPct, questionsTitleInnerRadiusPct, questionsTitleOuterRadiusPct) {
		this.g = g;
		this.cfg = {
			centerX: cfg.centerX,
			centerY: cfg.centerY,
			radians: cfg.radians,
			radius: cfg.radius,
			questionsNr: cfg.questionsNr,
			turnTextThresholds: cfg.turnTextThresholds,
			questionFontSize: cfg.questionFontSize
		};

		this.questions = questions;

		this.questionsStartRadius = questionsStartRadiusPct * this.cfg.radius;
		this.questionsStartRadiusPct = questionsStartRadiusPct;
		this.questionsTitleInnerRadius = questionsTitleInnerRadiusPct * this.cfg.radius;
		this.questionsTitleInnerRadiusPct = questionsTitleInnerRadiusPct;
		this.questionsTitleOuterRadius = questionsTitleOuterRadiusPct * this.cfg.radius;
		this.questionsTitleOuterRadiusPct = questionsTitleOuterRadiusPct;
		this.questionsTitleMiddleRadius = (questionsTitleInnerRadiusPct + (questionsTitleOuterRadiusPct - questionsTitleInnerRadiusPct) / 2) * this.cfg.radius;

		this.prepare();
	}

	prepare() {
		let radians = this.cfg.radians,
			questionsNr = this.cfg.questionsNr,
			centerX = this.cfg.centerX,
			centerY = this.cfg.centerY;
		let questionsTitleInnerRadiusPct = this.questionsTitleInnerRadiusPct,
			questionsStartRadiusPct = this.questionsStartRadiusPct;

		let avgRad = radians / questionsNr;

		this.questions.forEach((question, i) => {
			question.idx = i;
			question.startAngle = avgRad * i;
			question.endAngle = avgRad * (i + 1);
			question.avgX = centerX * (1 - (question.value * (questionsTitleInnerRadiusPct - questionsStartRadiusPct) * Math.sin(-(i+0.5) * avgRad)) 
							 			 - (questionsStartRadiusPct * Math.sin(-(i+0.5) * avgRad)));
			question.avgY = centerY * (1 - (question.value * (questionsTitleInnerRadiusPct - questionsStartRadiusPct) * Math.cos(-(i+0.5) * avgRad)) 
							 			 - (questionsStartRadiusPct * Math.cos(-(i+0.5) * avgRad)));
		});
	}

	renderFillings() {
		for(let question of this.questions) {
			this.renderFilling(question);
		}
	}

	renderFilling(question) {
		let centerX = this.cfg.centerX,
			centerY = this.cfg.centerY;
		let questionsStartRadius = this.questionsStartRadius,
			questionsTitleInnerRadius = this.questionsTitleInnerRadius;

		let fillingArc = d3.svg.arc()
						.innerRadius(questionsStartRadius)
						.outerRadius(questionsStartRadius + (questionsTitleInnerRadius - questionsStartRadius) * question.value)
						.startAngle(question.startAngle)
						.endAngle(question.endAngle);

		this.g.append("path")
			.attr("d", fillingArc)
			.attr("transform", `translate(${centerX}, ${centerY})`)
			.attr("fill", question.color);
	}


	renderTitles() {
		for(let question of this.questions) {
			this.renderTitle(question);
		}
	}

	renderTitle(question) {
		let centerX = this.cfg.centerX,
			centerY = this.cfg.centerY,
			questionsNr = this.cfg.questionsNr,
			questionFontSize = this.cfg.questionFontSize,
			turnTextThresholds = this.cfg.turnTextThresholds;
		let questionsTitleInnerRadius = this.questionsTitleInnerRadius,
			questionsTitleOuterRadius = this.questionsTitleOuterRadius,
			questionsTitleMiddleRadius = this.questionsTitleMiddleRadius;

		var textArc = d3.svg.arc()
					.innerRadius(questionsTitleMiddleRadius)
					.outerRadius(questionsTitleMiddleRadius)
					.startAngle(question.startAngle)
					.endAngle(question.endAngle);

		this.g.append("path")
			.attr("d", textArc)
			.attr("transform", `translate(${centerX}, ${centerY})`)
			.attr("id", "question_" + question.idx);

		var textMiddle = question.idx / questionsNr;
		var offset = textMiddle > turnTextThresholds[0] && textMiddle < turnTextThresholds[1] ? 1 : 0;
		var startOffset = 25 + 50 * offset;
		var fontSize = (questionsTitleOuterRadius - questionsTitleInnerRadius) * questionFontSize;

		var lines = question.title.split("\n");
		var linesNr = lines.length;

		lines.forEach((line, i) => {
			this.g.append("text")
			.attr("class", "questionTitle")
			.attr("dy", linesNr === 1 ? fontSize / 3 : (((-linesNr / 2) + i) + 0.75) * fontSize)
		   	.append("textPath")
			.attr("xlink:href", "#question_" + question.idx)
			.text(line)
			.attr("startOffset", startOffset + "%")
			.style("text-anchor","middle")
			.style("font-size", fontSize + "px");
		});
	}

	renderLines() {
		let centerX = this.cfg.centerX,
			centerY = this.cfg.centerY;
		let questionsStartRadiusPct = this.questionsStartRadiusPct,
			questionsTitleOuterRadiusPct = this.questionsTitleOuterRadiusPct;

		let questionAxis = this.g.selectAll(".questionAxis")
			.data(this.questions)
			.enter()
			.append("g")
			.attr("class", "questionAxis");

		questionAxis.append("line")
			.attr("x1", (question) => centerX * (1 - questionsStartRadiusPct * Math.sin(question.startAngle)))
			.attr("y1", (question) => centerY * (1 - questionsStartRadiusPct * Math.cos(question.startAngle)))
			.attr("x2", (question) => centerX * (1 - questionsTitleOuterRadiusPct * Math.sin(question.startAngle)))
			.attr("y2", (question) => centerY * (1 - questionsTitleOuterRadiusPct * Math.cos(question.startAngle)))
			.attr("class", "line")
			.style("stroke", "black")
			.style("stroke-width", "1px");
	}

	renderAverages() {
		this.g.selectAll(".area")
			 .data([this.questions])
			 .enter()
			 .append("polygon")
			 .attr("class", "radar-chart-series")
			 .style("stroke-width", "2px")
			 .style("stroke", "red")
			 .attr("points", function(questions) {
				 let str="";
				 for(let question of questions){
					 str += question.avgX + "," + question.avgY + " ";
				 }
				 return str;
			  })
			 .style("fill", "none");

		this.g.selectAll(".nodes")
			.data(this.questions).enter()
			.append("svg:circle")
			.attr("class", "radar-chart-series")
			.attr('r', "3px")
			.attr("cx", (question) => question.avgX)
			.attr("cy", (question) => question.avgY)
			.attr("title", (question) => question.title)
			.style("fill", "red").style("fill-opacity", .9);
	}
}