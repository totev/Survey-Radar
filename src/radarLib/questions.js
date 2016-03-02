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
			pixel: cfg.pixel
		};

		this.questions = questions;

		this.questionsStartRadius = questionsStartRadiusPct * this.cfg.radius;
		this.questionsStartRadiusPct = questionsStartRadiusPct;
		this.questionsTitleInnerRadius = questionsTitleInnerRadiusPct * this.cfg.radius;
		this.questionsTitleInnerRadiusPct = questionsTitleInnerRadiusPct;
		this.questionsTitleOuterRadius = questionsTitleOuterRadiusPct * this.cfg.radius;
		this.questionsTitleOuterRadiusPct = questionsTitleOuterRadiusPct;
		this.questionsTitleMiddleRadius = (questionsTitleInnerRadiusPct + (questionsTitleOuterRadiusPct - questionsTitleInnerRadiusPct) / 2) * this.cfg.radius;

		this.fontSize = (this.questionsTitleOuterRadius - this.questionsTitleInnerRadius) * cfg.questionFontSize;
		this.tooltipFontSize = cfg.pixel * cfg.tooltipFontSize;

		this.prepare();
	}

	prepare() {
		let radians = this.cfg.radians,
			questionsNr = this.cfg.questionsNr;

		let avgRad = radians / questionsNr;

		this.questions.forEach((question, i) => {
			question.idx = i;
			question.startAngle = avgRad * i;
			question.endAngle = avgRad * (i + 1);
			[question.avgX, question.avgY] = this.calculateXY(avgRad, i, question.value, 0.5);

			question.minDetail = 1;
			question.maxDetail = 0;

			let border = 0.15;
			let offset = (1 - (2*border)) / (question.details.length - 1);
			question.details.forEach((detail, j) => {
				[detail.posX, detail.posY] = this.calculateXY(avgRad, i, detail.value, j * offset + border)
				if(detail.value > question.maxDetail) question.maxDetail = detail.value;
				if(detail.value < question.minDetail) question.minDetail = detail.value;
			});
		});
	}

	calculateXY(avgRad, i, value, offset) {
		let centerX = this.cfg.centerX,
			centerY = this.cfg.centerY;
		let questionsTitleInnerRadiusPct = this.questionsTitleInnerRadiusPct,
			questionsStartRadiusPct = this.questionsStartRadiusPct;

		let x = centerX * (1 - (value * (questionsTitleInnerRadiusPct - questionsStartRadiusPct) * Math.sin(-(i+offset) * avgRad)) 
						 	 - (questionsStartRadiusPct * Math.sin(-(i+offset) * avgRad))),
			y = centerY * (1 - (value * (questionsTitleInnerRadiusPct - questionsStartRadiusPct) * Math.cos(-(i+offset) * avgRad)) 
						 	 - (questionsStartRadiusPct * Math.cos(-(i+offset) * avgRad)));
		return [x, y];
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
			this.renderTitleForeground(question);
		}
	}

	renderTitle(question) {
		let centerX = this.cfg.centerX,
			centerY = this.cfg.centerY,
			questionsNr = this.cfg.questionsNr,
			turnTextThresholds = this.cfg.turnTextThresholds;
		let questionsTitleInnerRadius = this.questionsTitleInnerRadius,
			questionsTitleOuterRadius = this.questionsTitleOuterRadius,
			questionsTitleMiddleRadius = this.questionsTitleMiddleRadius,
			fontSize = this.fontSize;

		let id = Math.random() * new Date();

		var textArc = d3.svg.arc()
					.innerRadius(questionsTitleMiddleRadius)
					.outerRadius(questionsTitleMiddleRadius)
					.startAngle(question.startAngle)
					.endAngle(question.endAngle);

		this.g.append("path")
			.attr("d", textArc)
			.attr("transform", `translate(${centerX}, ${centerY})`)
			.attr("id", "question_" + id);

		var textMiddle = question.idx / questionsNr;
		var offset = textMiddle > turnTextThresholds[0] && textMiddle < turnTextThresholds[1] ? 1 : 0;
		var startOffset = 25 + 50 * offset;

		var lines = question.title.split("\n");
		var linesNr = lines.length;

		lines.forEach((line, i) => {
			this.g.append("text")
			.attr("class", "questionTitle")
			.attr("dy", linesNr === 1 ? fontSize / 3 : (((-linesNr / 2) + i) + 0.75) * fontSize)
		   	.append("textPath")
			.attr("xlink:href", "#question_" + id)
			.text(line)
			.attr("startOffset", startOffset + "%")
			.style("text-anchor","middle")
			.style("font-size", fontSize + "px");
		});
	}

	renderTitleForeground(question) {
		let centerX = this.cfg.centerX,
			centerY = this.cfg.centerY;

		let questionsTitleInnerRadius = this.questionsTitleInnerRadius,
			questionsTitleOuterRadius = this.questionsTitleOuterRadius,
			fontSize = this.tooltipFontSize;

		let arc = d3.svg.arc()
					.innerRadius(questionsTitleInnerRadius)
					.outerRadius(questionsTitleOuterRadius)
					.startAngle(question.startAngle)
					.endAngle(question.endAngle);

		let foreground = this.g.append("path")
			.attr("d", arc)
			.attr("transform", `translate(${centerX}, ${centerY})`)
			.attr("fill", "white")
			.style("opacity", 0);

		if(question.details.length > 0) {
			let divHtml = "<strong>Details:</strong>";
			for(let detail of question.details) {
				divHtml += `<br />${detail.title}: ${detail.value}`;
			}
			let div = d3.select("body").append("div")
						.html(divHtml)
					    .attr("class", "tooltip")
					    .style("font-size", fontSize * 1.5 + "px")				
					    .style("opacity", 0)
					    .style("border-color", question.color);


			foreground.on("mouseover", () => {		
		            div.transition()		
		               .duration(200)		
		               .style("opacity", .9);		
		            div.style("left", (d3.event.pageX + 10) + "px")		
		               .style("top", (d3.event.pageY) + "px");	
	            })
	            .on("mousemove", () => {			
		            div.style("left", (d3.event.pageX + 10) + "px")		
		               .style("top", (d3.event.pageY) + "px");	
	            })					
		        .on("mouseout", () => {		
		            div.transition()		
		                .duration(500)		
		                .style("opacity", 0);	
		        });
		}
	}

	renderLines() {
		let centerX = this.cfg.centerX,
			centerY = this.cfg.centerY,
			pixel = this.cfg.pixel;
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
			.style("stroke-width", 1*pixel + "px");
	}

	renderAverages() {
		let pixel = this.cfg.pixel;

		let color = "rgb(237, 52, 52)";

		let renderables = this.questions.filter((q) => q.value);

		this.g.selectAll(".area")
			 .data([renderables])
			 .enter()
			 .append("polygon")
			 .attr("class", "radar-chart-series")
			 .style("stroke-width", (pixel * 1.5) + "px")
			 .style("stroke", color)
			 .attr("points", function(questions) {
				 let str="";
				 for(let question of questions){
					 str += question.avgX + "," + question.avgY + " ";
				 }
				 return str;
			  })
			 .style("fill", "none");

		this.g.selectAll(".avgNodes")
			.data(renderables).enter()
			.append("svg:circle")
			.attr("class", "radar-chart-series")
			.attr('r', (pixel * 2) + "px")
			.attr("cx", (question) => question.avgX)
			.attr("cy", (question) => question.avgY)
			.style("fill", color);
	}

	renderAllDetails() {
		for(let question of this.questions) {
			this.renderQuestionDetails(question);
		}
	}

	renderQuestionDetails(question) {
		let pixel = this.cfg.pixel;

		this.g.selectAll(".detailNodes")
			.data(question.details).enter()
			.append("svg:circle")
			.attr("class", "radar-chart-series")
			.attr('r', (pixel * 2) + "px")
			.attr("cx", (detail) => detail.posX)
			.attr("cy", (detail) => detail.posY)
			.attr("title", (question) => question.title)
			.style("fill", "black");
	}

	renderMinMaxs() {
		for(let question of this.questions) {
			if(question.details.length > 0) {
				this.renderMinMax(question);				
			}
		}
	}

	renderMinMax(question) {
		let centerX = this.cfg.centerX,
			centerY = this.cfg.centerY;
		let questionsStartRadius = this.questionsStartRadius,
			questionsTitleInnerRadius = this.questionsTitleInnerRadius;

		let fillingArc = d3.svg.arc()
						.innerRadius(questionsStartRadius + (questionsTitleInnerRadius - questionsStartRadius) * question.minDetail)
						.outerRadius(questionsStartRadius + (questionsTitleInnerRadius - questionsStartRadius) * question.maxDetail)
						.startAngle(question.startAngle)
						.endAngle(question.endAngle);

		this.g.append("path")
			.attr("d", fillingArc)
			.attr("transform", `translate(${centerX}, ${centerY})`)
			.attr("fill", "rgba(128, 128, 128, 0.33)");
	}
}