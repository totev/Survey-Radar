export default class SubCategories {

	constructor(g, cfg, subCats, subCatTitleInnerRadiusPct, subCatTitleOuterRadiusPct, subAxisEndPct) {
		this.g = g;
		this.cfg = {
			centerX: cfg.centerX,
			centerY: cfg.centerY,
			radians: cfg.radians,
			radius: cfg.radius,
			questionsNr: cfg.questionsNr,
			centerDotSize: cfg.centerDotSize,
			subCatFontSize: cfg.subCatFontSize,
			turnTextThresholds: cfg.turnTextThresholds
		};

		this.subCats = subCats;
		this.prepare();

		this.subAxisEndPct = subAxisEndPct;

		this.subCatTitleInnerRadius = subCatTitleInnerRadiusPct * this.cfg.radius; // TODO pass with cfg?
		this.subCatTitleOuterRadius = subCatTitleOuterRadiusPct * this.cfg.radius; // TODO pass with cfg?
		this.subCatTitleMiddleRadius = this.subCatTitleInnerRadius + (this.subCatTitleOuterRadius - this.subCatTitleInnerRadius) / 2;

		this.centerDotSizePx = this.cfg.centerDotSize * this.cfg.radius;
	}

	prepare() {
		let radians = this.cfg.radians,
			questionsNr = this.cfg.questionsNr;
		let questionCounter = 0;

		for(let subCat of this.subCats) {
			subCat.firstQuestionIdx = questionCounter;
			subCat.questionsNr = subCat.questions.length;

			subCat.startAngle = (radians / questionsNr) * questionCounter;
			subCat.endAngle = (radians / questionsNr) * (questionCounter + subCat.questionsNr);
			questionCounter += subCat.questionsNr;
		}
	}

	renderFillings() {
		for(let subCat of this.subCats) {
			this.renderFilling(subCat);
		}
	}

	renderFilling(subCat) {
		let centerX = this.cfg.centerX,
			centerY = this.cfg.centerY;

		let centerDotSizePx = this.centerDotSizePx,
			subCatTitleInnerRadius = this.subCatTitleInnerRadius,
			subCatTitleOuterRadius = this.subCatTitleOuterRadius,
			subCatTitleMiddleRadius = this.subCatTitleMiddleRadius;

		let fillingArc = d3.svg.arc()
					.innerRadius(1)
					.outerRadius(centerDotSizePx + (subCatTitleInnerRadius - centerDotSizePx) * subCat.value)
					.startAngle(subCat.startAngle)
					.endAngle(subCat.endAngle);

		this.g.append("path")
			.attr("d", fillingArc)
			.attr("transform", `translate(${centerX}, ${centerY})`)
			.attr("fill", subCat.color);
	}

	renderTitles(withBackground) {
		for(let subCat of this.subCats) {
			if(withBackground) {
				this.renderTitleBackground(subCat);
			}
			this.renderTitle(subCat);
		}
	}

	renderTitle(subCat) {
		let centerX = this.cfg.centerX,
			centerY = this.cfg.centerY,
			questionsNr = this.cfg.questionsNr,
			subCatFontSize = this.cfg.subCatFontSize,
			turnTextThresholds = this.cfg.turnTextThresholds;

		let subCatTitleInnerRadius = this.subCatTitleInnerRadius,
			subCatTitleOuterRadius = this.subCatTitleOuterRadius,
			subCatTitleMiddleRadius = this.subCatTitleMiddleRadius;
			
		let textArc = d3.svg.arc()
					.innerRadius(subCatTitleMiddleRadius)
					.outerRadius(subCatTitleMiddleRadius)
					.startAngle(subCat.startAngle)
					.endAngle(subCat.endAngle);

		this.g.append("path")
			.attr("d", textArc)
			.attr("transform", `translate(${centerX}, ${centerY})`)
			.attr("id", "subCat_" + subCat.firstQuestionIdx);

		let textMiddle = (subCat.firstQuestionIdx + subCat.questionsNr / 2) / questionsNr;
		let offset = textMiddle > turnTextThresholds[0] && textMiddle < turnTextThresholds[1] ? 1 : 0;
		let startOffset = 25 + 50 * offset;
		let fontSize = (subCatTitleOuterRadius - subCatTitleInnerRadius) * subCatFontSize;

		
		let lines = subCat.title.split("\n");
		let linesNr = lines.length;

		lines.forEach((line, i) => {
			this.g.append("text")
			.attr("class", "subCatTitle")
			.attr("dy", linesNr === 1 ? fontSize / 3 : (((-linesNr / 2) + i) + 0.75) * fontSize)
		   	.append("textPath")
			.attr("xlink:href", "#subCat_" + subCat.firstQuestionIdx)
			.text(line)
			.attr("startOffset", startOffset + "%")
			.style("text-anchor","middle")
			.style("font-size", fontSize + "px");
		});
	}

	renderTitleBackground(subCat) {
		let centerX = this.cfg.centerX,
			centerY = this.cfg.centerY;

		let subCatTitleInnerRadius = this.subCatTitleInnerRadius,
			subCatTitleOuterRadius = this.subCatTitleOuterRadius;

		let arc = d3.svg.arc()
					.innerRadius(subCatTitleInnerRadius)
					.outerRadius(subCatTitleOuterRadius)
					.startAngle(subCat.startAngle)
					.endAngle(subCat.endAngle);

		this.g.append("path")
			.attr("d", arc)
			.attr("transform", `translate(${centerX}, ${centerY})`)
			.attr("fill", subCat.color);
	}

	renderLines() {
		let centerX = this.cfg.centerX,
			centerY = this.cfg.centerY,
			radians = this.cfg.radians,
			questionsNr = this.cfg.questionsNr;
		let subAxisEndPct = this.subAxisEndPct;

		let subCatAxis = this.g.selectAll(".subAxis")
			.data(this.subCats)
			.enter()
			.append("g")
			.attr("class", "subAxis");

		subCatAxis.append("line")
			.attr("x1", centerX)
			.attr("y1", centerY)
			.attr("x2", (subCat) => centerX * (1 - subAxisEndPct * Math.sin(-subCat.firstQuestionIdx * radians / questionsNr)))
			.attr("y2", (subCat) => centerY * (1 - subAxisEndPct * Math.cos(-subCat.firstQuestionIdx * radians / questionsNr)))
			.attr("class", "line")
			.style("stroke", "black")
			.style("stroke-width", "2px");
	}
}