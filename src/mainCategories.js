export default class MainCategories {

	constructor(g, cfg, mainCats, innerTitleRadiusPct) {
		this.g = g;
		this.cfg = {
			centerX: cfg.centerX,
			centerY: cfg.centerY,
			radius: cfg.radius,
			radians: cfg.radians,
			questionsNr: cfg.questionsNr,
			backgroundOpacity: cfg.backgroundOpacity,
			mainCatFontSize: cfg.mainCatFontSize,
			mainCatLetterSpacing: cfg.mainCatLetterSpacing,
			turnTextThresholds: cfg.turnTextThresholds
		};

		this.mainCats = mainCats;
		this.prepare();

		this.innerTitleRadius = innerTitleRadiusPct * this.cfg.radius; // TODO pass with cfg?
	}

	prepare() {
		let radians = this.cfg.radians,
			questionsNr = this.cfg.questionsNr;
		let questionCounter = 0;

		for(let mainCat of this.mainCats) {
			mainCat.questionsNr = 0;
			mainCat.firstQuestionIdx = questionCounter;
			
			for(let subCat of mainCat.subCats) {
				mainCat.questionsNr += subCat.questions.length;
			}

			mainCat.startAngle = (radians / questionsNr) * questionCounter;
			mainCat.endAngle = (radians / questionsNr) * (questionCounter + mainCat.questionsNr);
			questionCounter += mainCat.questionsNr;
		}
	}

	renderBackgrounds() {
		for(let mainCat of this.mainCats) {
			this.renderBackground(mainCat);
		}
	}

	renderTitles() {
		for(let mainCat of this.mainCats) {
			this.renderTitle(mainCat);
		}
	}

	renderBackground(mainCat) {
		let centerX = this.cfg.centerX,
			centerY = this.cfg.centerY,
			innerTitleRadius = this.innerTitleRadius,
			backgroundOpacity = this.cfg.backgroundOpacity;

		let backgroundArc = d3.svg.arc()
			.innerRadius(1)
			.outerRadius(innerTitleRadius)
			.startAngle(mainCat.startAngle)
			.endAngle(mainCat.endAngle);

		this.g.append("path")
			.attr("class", "arc")
			.attr("d", backgroundArc)
			.attr("transform", `translate(${centerX}, ${centerY})`)
			.attr("fill", mainCat.color)
			.attr("stroke", mainCat.color)
			.style("opacity", backgroundOpacity);
	}

	renderTitle(mainCat) {
		let centerX = this.cfg.centerX,
			centerY = this.cfg.centerY,
			innerTitleRadius = this.innerTitleRadius,
			radius = this.cfg.radius,
			questionsNr = this.cfg.questionsNr,
			mainCatFontSize = this.cfg.mainCatFontSize,
			letterSpacing = this.cfg.mainCatLetterSpacing,
			turnTextThresholds = this.cfg.turnTextThresholds;

		let arc = d3.svg.arc()
						.innerRadius(innerTitleRadius)
						.outerRadius(radius)
						.startAngle(mainCat.startAngle)
						.endAngle(mainCat.endAngle);

		let textArc = d3.svg.arc()
					.innerRadius(innerTitleRadius + (radius-innerTitleRadius)/2)
					.outerRadius(innerTitleRadius + (radius-innerTitleRadius)/2)
					.startAngle(mainCat.startAngle)
					.endAngle(mainCat.endAngle);

		this.g.append("path")
			.attr("class", "arc")
			.attr("d", arc)
			.attr("transform", `translate(${centerX}, ${centerY})`)
			.attr("fill", mainCat.color)
			.attr("stroke", mainCat.color);
		
		this.g.append("path")
			.attr("d", textArc)
			.attr("transform", `translate(${centerX}, ${centerY})`)
			.attr("id", "mainCat_" + mainCat.firstQuestionIdx);			

		let textMiddle = (mainCat.firstQuestionIdx + mainCat.questionsNr / 2) / questionsNr;
		let offset = textMiddle > turnTextThresholds[0] && textMiddle < turnTextThresholds[1] ? 1 : 0;
		let startOffset = 25 + 50 * offset;
		let fontSize = (radius - innerTitleRadius) * mainCatFontSize;

		this.g.append("text")
			.attr("class", "mainCatTitle")
			.attr("dy", fontSize / 3)
		   	.append("textPath")
			.attr("xlink:href", "#mainCat_" + mainCat.firstQuestionIdx)
			.text(mainCat.mainCat)
			.attr("fill", "white")
			.attr("startOffset", startOffset + "%")
			.style("text-anchor","middle")
			.style("font-size", fontSize + "px")
			.style("letter-spacing", letterSpacing + "px");
	}

	renderLines() {
		let radians = this.cfg.radians,
			questionsNr = this.cfg.questionsNr,
			centerX = this.cfg.centerX,
			centerY = this.cfg.centerY;

		let mainCatAxis = this.g.selectAll(".mainAxis")
			.data(this.mainCats)
			.enter()
			.append("g")
			.attr("class", "mainAxis");

		mainCatAxis.append("line")
			.attr("x1", centerX)
			.attr("y1", centerY)
			.attr("x2", (mainCat) => centerX * (1 - Math.sin(-mainCat.firstQuestionIdx * radians / questionsNr)))
			.attr("y2", (mainCat, i) => centerY * (1 - Math.cos(-mainCat.firstQuestionIdx * radians / questionsNr)))
			.attr("class", "line")
			.style("stroke", "black")
			.style("stroke-width", "3px");
	}

}