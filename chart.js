//Practically all this code comes from https://github.com/alangrafu/radar-chart-d3
//I only made some additions and aesthetic adjustments to make the chart look better 
//(of course, that is only my point of view)
//Such as a better placement of the titles at each line end, 
//adding numbers that reflect what each circular level stands for
//Not placing the last level and slight differences in color
//
//For a bit of extra information check the blog about it:
//http://nbremer.blogspot.nl/2013/09/making-d3-radar-chart-look-bit-better.html

var RadarChart = {
  	draw: function(id, d, options){
  	var cfg = {
	 	radius: 5,
	 	w: 800,
	 	h: 800,
	 	factor: 1,
	 	radians: 2 * Math.PI,
	 	TranslateX: 80,
	 	TranslateY: 30,
	 	ExtraWidthX: 100,
	 	ExtraWidthY: 100,
	};
	
	if('undefined' !== typeof options){
	  for(var i in options){
		if('undefined' !== typeof options[i]){
		  cfg[i] = options[i];
		}
	  }
	}


	var radius = cfg.factor*Math.min(cfg.w/2, cfg.h/2);
	var Format = d3.format('%');
	d3.select(id).select("svg").remove();
	
	var g = d3.select(id)
			.append("svg")
			.attr("width", cfg.w+cfg.ExtraWidthX)
			.attr("height", cfg.h+cfg.ExtraWidthY)
			.append("g")
			.attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");



// CIRCLES
	var centerDot = 0.04;
	var circles = [{
		height: 0.09 + centerDot, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		legendValue: 25
	}, {
		height: 0.09, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		legendValue: 50
	}, {
		height: 0.09, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		legendValue: 75
	}, {
		height: 0.09, // percentage of total radius
		stroke: "black",
		strength: "1px"
	}, {
		height: 0.09, // percentage of total radius
		stroke: "black",
		strength: "1px"
	}, {
		height: 0.08, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		legendValue: 25
	}, {
		height: 0.08, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		legendValue: 50
	}, {
		height: 0.08, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		legendValue: 75
	}, {
		height: 0.08, // percentage of total radius
		stroke: "black",
		strength: "1px"
	}, {
		height: 0.08, // percentage of total radius
		stroke: "black",
		strength: "1px"
	}];

	var circlePosition = 0;
	g.selectAll(".circle")
				.data(circles)
				.enter()
				.append("circle")
				.attr("cx", cfg.w/2)
				.attr("cy", cfg.h/2)
				.attr("r", (c) => {
					circlePosition += c.height;
					return circlePosition * radius;
				})
				.attr("fill", "none")
				.attr("stroke", (c) => c.stroke)
				.attr("stroke-width", (c) => c.strength);



// AXIS
	var subAxisEnd = circlePosition;
	var questionAxisStart = 0;
	circles.slice(0, 5).forEach((circle) => questionAxisStart += circle.height);
	var mainCats = d;
	var questionsNr = 0;
	var maxQuestionsInMainCat = 0;
	mainCats.forEach((mainCat) => {
		mainCat.questions = 0;
		mainCat.subCats.forEach((subCat) => mainCat.questions += subCat.questions.length);
		questionsNr += mainCat.questions;
		if(mainCat.questions > maxQuestionsInMainCat) maxQuestionsInMainCat = mainCat.questions;
	});

	var subCats = mainCats.map((mainCat) => mainCat.subCats)
					.reduce((aggregate, next) => aggregate.concat(next));

	var questions = subCats.map((subCat) => subCat.questions)
					.reduce((aggregate, next) => aggregate.concat(next));


	


// MAIN CATEGORIES

	var questionCounter = 0;
	for(var i = 0; i < mainCats.length; i++) {
		var mainCat = mainCats[i];
		var innerRadius = radius - (1 - subAxisEnd) * radius;



		// FILLING

		var backgroundArc = d3.svg.arc()
			.innerRadius(1)
			.outerRadius(innerRadius)
			.startAngle((cfg.radians/questionsNr)*questionCounter)
			.endAngle((cfg.radians/questionsNr)*(questionCounter+mainCat.questions));

		g.append("path")
			.attr("class", "arc")
			.attr("d", backgroundArc)
			.attr("transform", "translate(" + cfg.w/2 + "," + cfg.h/2 + ")")
			.attr("fill", mainCat.color)
			.attr("stroke", mainCat.color)
			.style("opacity", 0.1);


		// TITLE

		var arc = d3.svg.arc()
					.innerRadius(radius)
					.outerRadius(innerRadius)
					.startAngle((cfg.radians/questionsNr)*questionCounter)
					.endAngle((cfg.radians/questionsNr)*(questionCounter+mainCat.questions));

		var textArc = d3.svg.arc()
					.innerRadius(innerRadius + (radius-innerRadius)/2)
					.outerRadius(innerRadius + (radius-innerRadius)/2)
					.startAngle((cfg.radians/questionsNr)*questionCounter)
					.endAngle((cfg.radians/questionsNr)*(questionCounter+mainCat.questions));

		questionCounter += mainCat.questions;

		g.append("path")
			.attr("class", "arc")
			.attr("d", arc)
			.attr("transform", "translate(" + cfg.w/2 + "," + cfg.h/2 + ")")
			.attr("fill", mainCat.color)
			.attr("stroke", mainCat.color);
		
		g.append("path")
			.attr("d", textArc)
			.attr("transform", "translate(" + cfg.w/2 + "," + cfg.h/2 + ")")
			.attr("id", "mainCat_" + i);			

		var textMiddle = (questionCounter - mainCat.questions / 2) / questionsNr;
		var offset = textMiddle > 0.25 && textMiddle < 0.75 ? 1 : 0;
		var startOffset = 25 + 50 * offset;
		var fontSize = (radius - innerRadius) * 0.7;
		var letterSpacing = 2;

		g.append("text")
			.attr("class", "mainCatTitle")
			.attr("dy", fontSize / 3)
		   	.append("textPath")
			.attr("xlink:href", "#mainCat_" + i)
			.text(mainCat.mainCat)
			.attr("fill", "white")
			.attr("startOffset", startOffset + "%")
			.style("text-anchor","middle")
			.style("font-size", fontSize + "px")
			.style("letter-spacing", letterSpacing + "px")
	}


// SUB CATEGORIES

	var subCatInnerRadius = circles.slice(0,4).map((c) => c.height).reduce((sum, next) => sum += next) * radius;
	var subCatOuterRadius = subCatInnerRadius + radius * circles[4].height;
	var subCatMiddleRadius = subCatInnerRadius + (subCatOuterRadius - subCatInnerRadius) / 2;



	// FILLING
	questionCounter = 0;
	for(var i = 0; i < subCats.length; i++) {
		var subCat = subCats[i];
		var subCatQuestionsNr = subCat.questions.length;
		var fillingArc = d3.svg.arc()
						.innerRadius(1)
						.outerRadius((subCatInnerRadius - centerDot * radius) * subCat.value + centerDot * radius)
						.startAngle((cfg.radians/questionsNr)*questionCounter)
						.endAngle((cfg.radians/questionsNr)*(questionCounter+subCatQuestionsNr));
		questionCounter += subCatQuestionsNr;

		g.append("path")
			.attr("d", fillingArc)
			.attr("transform", "translate(" + cfg.w/2 + "," + cfg.h/2 + ")")
			.attr("fill", subCat.color);

	}

	questionCounter = 0;
	for(var i = 0; i < subCats.length; i++) {
		var subCat = subCats[i];
		var subCatQuestionsNr = subCat.questions.length;
		
		var textArc = d3.svg.arc()
					.innerRadius(subCatMiddleRadius)
					.outerRadius(subCatMiddleRadius)
					.startAngle((cfg.radians/questionsNr)*questionCounter)
					.endAngle((cfg.radians/questionsNr)*(questionCounter+subCatQuestionsNr));
		questionCounter += subCatQuestionsNr;

		g.append("path")
			.attr("d", textArc)
			.attr("transform", "translate(" + cfg.w/2 + "," + cfg.h/2 + ")")
			.attr("id", "subCat_" + i);

		var textMiddle = (questionCounter - subCatQuestionsNr / 2) / questionsNr;
		var offset = textMiddle > 0.25 && textMiddle < 0.75 ? 1 : 0;
		var startOffset = 25 + 50 * offset;
		var fontSize = (subCatOuterRadius - subCatInnerRadius) * 0.38;

		
		var lines = subCat.title.split("\n");
		var linesNr = lines.length;

		for(var j = 0; j < linesNr; j++) {
			g.append("text")
			.attr("class", "subCatTitle")
			.attr("dy", linesNr === 1 ? fontSize/3 : (((-linesNr/2) + j) + 0.75)*fontSize)
		   	.append("textPath")
			.attr("xlink:href", "#subCat_" + i)
			.text(lines[j])
			.attr("startOffset", startOffset + "%")
			.style("text-anchor","middle")
			.style("font-size", fontSize + "px");	
		}
		
	}



// QUESTIONS

	var questionsOuterRadius = subAxisEnd * radius;
	var questionsInnerRadius = questionsOuterRadius - circles[circles.length-1].height * radius;
	var questionsMiddleRadius = questionsInnerRadius + (questionsOuterRadius - questionsInnerRadius) / 2;

	// FILLING

	for(var i = 0; i < questions.length; i++) {
		var question = questions[i];
		var fillingArc = d3.svg.arc()
						.innerRadius(subCatOuterRadius)
						.outerRadius(subCatOuterRadius + (questionsInnerRadius-subCatOuterRadius)*question.value)
						.startAngle((cfg.radians/questionsNr)*i)
						.endAngle((cfg.radians/questionsNr)*(i+1));

		g.append("path")
			.attr("d", fillingArc)
			.attr("transform", "translate(" + cfg.w/2 + "," + cfg.h/2 + ")")
			.attr("fill", question.color);

	}

	for(var i = questions.length -1; i >= 0; i--) {
		var question = questions[i];
		
		// TITLE

		var textArc = d3.svg.arc()
					.innerRadius(questionsMiddleRadius)
					.outerRadius(questionsMiddleRadius)
					.startAngle((cfg.radians/questionsNr)*i)
					.endAngle((cfg.radians/questionsNr)*(i+1));

		g.append("path")
			.attr("d", textArc)
			.attr("transform", "translate(" + cfg.w/2 + "," + cfg.h/2 + ")")
			.attr("id", "question_" + i);

		var textMiddle = (i+1) / questionsNr;
		var offset = textMiddle > 0.25 && textMiddle < 0.75 ? 1 : 0;
		var startOffset = 25 + 50 * offset;
		var fontSize = (questionsOuterRadius - questionsInnerRadius) * 0.28;



		var lines = question.title.split("\n");
		var linesNr = lines.length;

		for(var j = 0; j < linesNr; j++) {
			g.append("text")
			.attr("class", "questionTitle")
			.attr("dy", linesNr === 1 ? fontSize/3 : (((-linesNr/2) + j) + 0.75)*fontSize)
		   	.append("textPath")
			.attr("xlink:href", "#question_" + i)
			.text(lines[j])
			.attr("startOffset", startOffset + "%")
			.style("text-anchor","middle")
			.style("font-size", fontSize + "px");	
		}
	}




//Question divider lines
	var questionAxis = g.selectAll(".questionAxis")
			.data(questions)
			.enter()
			.append("g")
			.attr("class", "questionAxis");

	questionAxis.append("line")
		.attr("x1", (d, i) => {
			return (cfg.w/2)*(1-cfg.factor*questionAxisStart*Math.sin(i*cfg.radians/questionsNr));
		})
		.attr("y1", (d, i) => {
			return (cfg.w/2)*(1-cfg.factor*questionAxisStart*Math.cos(i*cfg.radians/questionsNr));
		})
		.attr("x2", (d, i) => {
			return (cfg.w/2)*(1-cfg.factor*subAxisEnd*Math.sin(i*cfg.radians/questionsNr));
		})
		.attr("y2", (d, i) => {
			return (cfg.h/2)*(1-cfg.factor*subAxisEnd*Math.cos(i*cfg.radians/questionsNr));
		})
		.attr("class", "line")
		.style("stroke", "black")
		.style("stroke-width", "1px");


// Sub Category divider lines
	var subCatAxis = g.selectAll(".subAxis")
			.data(subCats)
			.enter()
			.append("g")
			.attr("class", "subAxis");

	questionCounter = 0;
	subCatAxis.append("line")
		.attr("x1", cfg.w/2)
		.attr("y1", cfg.h/2)
		.attr("x2", (d, i) => {
			if(subCats[i-1]) questionCounter += subCats[i-1].questions.length; else questionCounter = 0;
			return (cfg.w/2)*(1-cfg.factor*subAxisEnd*Math.sin(-questionCounter*cfg.radians/questionsNr));
		})
		.attr("y2", (d, i) => {
			if(subCats[i-1]) questionCounter += subCats[i-1].questions.length; else questionCounter = 0;
			return (cfg.h/2)*(1-cfg.factor*subAxisEnd*Math.cos(-questionCounter*cfg.radians/questionsNr));
		})
		.attr("class", "line")
		.style("stroke", "black")
		.style("stroke-width", "2px");



// Main Category divider lines

	var mainCatAxis = g.selectAll(".mainAxis")
			.data(mainCats)
			.enter()
			.append("g")
			.attr("class", "mainAxis");

	questionCounter = 0;
	mainCatAxis.append("line")
		.attr("x1", cfg.w/2)
		.attr("y1", cfg.h/2)
		.attr("x2", (d, i) => {
			if(mainCats[i-1]) questionCounter += mainCats[i-1].questions; else questionCounter = 0;
			return cfg.w/2*(1-cfg.factor*Math.sin(-questionCounter*cfg.radians/questionsNr));
		})
		.attr("y2", (d, i) => {
			if(mainCats[i-1]) questionCounter += mainCats[i-1].questions; else questionCounter = 0;
			return cfg.h/2*(1-cfg.factor*Math.cos(-questionCounter*cfg.radians/questionsNr));
		})
		.attr("class", "line")
		.style("stroke", "black")
		.style("stroke-width", "3px");


// Center Dot

	g.append("circle")
		.attr("cx", cfg.w/2)
		.attr("cy", cfg.h/2)
		.attr("r", centerDot * radius)
		.attr("fill", "black");

 
// LEGEND
	circlePosition = 0;
	var legendDot = 0.015;
	var legendFontSize = legendDot * radius * 1.3;
	for(var i = 0; i < circles.length; i++) {
		var circle = circles[i];
		if(circle.legendValue) {
			var group = g.append("g")
				.attr("transform", "translate(" + (cfg.w/2) + "," + (cfg.h/2 - (circlePosition + circle.height) *radius) + ")");

			group.append("circle")
				.attr("cx", 0)
				.attr("cy", 0)
				.attr("r", legendDot * radius);

			group.append("text")
				.attr("fill", "white")
				.attr("text-anchor", "middle")
				.attr("dy", legendFontSize / 3)
				.text(circle.legendValue)
				.style("font-size", legendFontSize + "px");
		}
		circlePosition += circle.height;
	}

  }
};