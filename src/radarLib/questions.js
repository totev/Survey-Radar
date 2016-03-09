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
			pixel: cfg.pixel,
			questionLineWidth: cfg.questionLineWidth,
			minMaxColor: cfg.minMaxColor,
			avgLineColors: cfg.avgLineColors
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

		this.valuesNr = 0; // the # of values provided per question, to be set in calculateXYs()

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
			let questionValuesNr = question.values.length;
			question.valueStartAngles = question.values.map((value, idx) => question.startAngle + avgRad * idx / questionValuesNr);
			question.valueEndAngles = question.values.map((value, idx) => question.startAngle + avgRad * (idx + 1) / questionValuesNr);
			[question.avgXs, question.avgYs] = this.calculateXYs(avgRad, i, question.values, 0.5);

			question.minDetail = 1;
			question.maxDetail = 0;

			let border = 0.15;
			let offset = (1 - (2*border)) / (question.details.length - 1);
			question.details.forEach((detail, j) => {
				[detail.posXs, detail.posYs] = this.calculateXYs(avgRad, i, detail.values, j * offset + border)
				if(detail.values[0] !== null && detail.values[0] > question.maxDetail) question.maxDetail = detail.values[0]; //TODO
				if(detail.values[0] !== null && detail.values[0] < question.minDetail) question.minDetail = detail.values[0];
			});
		});
	}

	calculateXYs(avgRad, i, values, offset) {
		let centerX = this.cfg.centerX,
			centerY = this.cfg.centerY;
		let questionsTitleInnerRadiusPct = this.questionsTitleInnerRadiusPct,
			questionsStartRadiusPct = this.questionsStartRadiusPct;

		let xs = [],
			ys = [];
		values.forEach((value) => {
			let x,y;
			if(value !== null) {
				x = centerX * (1 - (value * (questionsTitleInnerRadiusPct - questionsStartRadiusPct) * Math.sin(-(i + offset) * avgRad))
								 - (questionsStartRadiusPct * Math.sin(-(i + offset) * avgRad))),
				y = centerY * (1 - (value * (questionsTitleInnerRadiusPct - questionsStartRadiusPct) * Math.cos(-(i + offset) * avgRad))
								 - (questionsStartRadiusPct * Math.cos(-(i + offset) * avgRad)));
			}
			xs.push(x);
			ys.push(y);
		});
		if(values.length > this.valuesNr) this.valuesNr = values.length;

		return [xs, ys];
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

		question.values.forEach((value, idx) => {
			if(value !== null) {
				let fillingArc = d3.svg.arc()
					.innerRadius(questionsStartRadius)
					.outerRadius(questionsStartRadius + (questionsTitleInnerRadius - questionsStartRadius) * value)
					.startAngle(question.valueStartAngles[idx])
					.endAngle(question.valueEndAngles[idx]);

				this.g.append("path")
					.attr("d", fillingArc)
					.attr("transform", `translate(${centerX}, ${centerY})`)
					.attr("fill", question.color);
			}
		});
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
				let values = detail.values.join(", ");
				if(detail.values.length > 1) values = `[${values}]`;
				divHtml += `<br />${detail.title}: ${values}/1`;
			}
			let div = d3.select("#tooltipBin").append("div")
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
			pixel = this.cfg.pixel,
			questionLineWidth = this.cfg.questionLineWidth;
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
			.style("stroke-width", (questionLineWidth * pixel) + "px");
	}

	renderAverages() {
		let pixel = this.cfg.pixel,
			colors = this.cfg.avgLineColors;
		let valuesNr = this.valuesNr;

		let coordinateLists = [];
		for(let i = 0; i < valuesNr; i++) {
			let coordinates = this.questions.map((q) => {return {x: q.avgXs[i], y: q.avgYs[i]}});
			coordinates = coordinates.filter((coordinate) => coordinate.x !== undefined && coordinate.y !== undefined);
			coordinateLists.push(coordinates);

			this.g.selectAll(".avgNodes")
				.data(coordinates).enter()
				.append("svg:circle")
				.attr("class", "radar-chart-series")
				.attr('r', (pixel * 2) + "px")
				.attr("cx", (coordinate) => coordinate.x)
				.attr("cy", (coordinate) => coordinate.y)
				.style("fill", colors[i % colors.length]);
		}

		this.g.selectAll(".area")
			 .data(coordinateLists)
			 .enter()
			 .append("polygon")
			 .attr("class", "radar-chart-series")
			 .style("stroke-width", (pixel * 1.5) + "px")
			 .style("stroke", (c, i) => colors[i % colors.length])
			 .attr("points", function(coordinates) {
				 let str="";
				 for(let coordinate of coordinates){
					 str += coordinate.x + "," + coordinate.y + " ";
				 }
				 return str;
			  })
			 .style("fill", "none");
	}

	renderAllDetails() {
		for(let question of this.questions) {
			this.renderQuestionDetails(question);
		}
	}

	renderQuestionDetails(question) {
		let pixel = this.cfg.pixel,
			colors = this.cfg.avgLineColors;

		let details = question.details.filter((detail) => !isNaN(detail.posXs[0]) && !isNaN(detail.posYs[0])); // TODO

		this.g.selectAll(".detailNodes")
			.data(details).enter()
			.append("svg:circle")
			.attr("class", "radar-chart-series")
			.attr('r', (pixel * 2) + "px")
			.attr("cx", (detail) => detail.posXs[0]) //TODO make dynamic or safer
			.attr("cy", (detail) => detail.posYs[0])
			.attr("title", (question) => question.title)
			.style("fill", colors[0]); //TODO
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
			centerY = this.cfg.centerY,
			minMaxColor = this.cfg.minMaxColor;
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
			.attr("fill", minMaxColor);
	}
}