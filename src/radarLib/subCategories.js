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
			turnTextThresholds: cfg.turnTextThresholds,
			pixel: cfg.pixel,
			subCatLineWidth: cfg.subCatLineWidth
		};

		this.subCats = subCats;
		this.prepare();

		this.subAxisEndPct = subAxisEndPct;

		this.subCatTitleInnerRadius = subCatTitleInnerRadiusPct * this.cfg.radius;
		this.subCatTitleOuterRadius = subCatTitleOuterRadiusPct * this.cfg.radius;
		this.subCatTitleMiddleRadius = this.subCatTitleInnerRadius + (this.subCatTitleOuterRadius - this.subCatTitleInnerRadius) / 2;

		this.centerDotSizePx = this.cfg.centerDotSize * this.cfg.radius;
		this.fontSize = (this.subCatTitleOuterRadius - this.subCatTitleInnerRadius) * cfg.subCatFontSize;
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
			let subCatValuesNr = subCat.values.length;
			subCat.valueStartAngles = subCat.values.map((value, idx) => subCat.startAngle + (subCat.endAngle - subCat.startAngle) * idx / subCatValuesNr);
			subCat.valueEndAngles = subCat.values.map((value, idx) => subCat.startAngle + (subCat.endAngle - subCat.startAngle) * (idx + 1) / subCatValuesNr);

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

		subCat.values.forEach((value, idx) => {
			let fillingArc = d3.svg.arc()
				.innerRadius(1)
				.outerRadius(centerDotSizePx + (subCatTitleInnerRadius - centerDotSizePx) * value)
				.startAngle(subCat.valueStartAngles[idx])
				.endAngle(subCat.valueEndAngles[idx]);

			this.g.append("path")
				.attr("d", fillingArc)
				.attr("transform", `translate(${centerX}, ${centerY})`)
				.attr("fill", subCat.color);
		});
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
			turnTextThresholds = this.cfg.turnTextThresholds;

		let subCatTitleInnerRadius = this.subCatTitleInnerRadius,
			subCatTitleOuterRadius = this.subCatTitleOuterRadius,
			subCatTitleMiddleRadius = this.subCatTitleMiddleRadius,
			fontSize = this.fontSize;

		let id = Math.random() * new Date();
			
		let textArc = d3.svg.arc()
					.innerRadius(subCatTitleMiddleRadius)
					.outerRadius(subCatTitleMiddleRadius)
					.startAngle(subCat.startAngle)
					.endAngle(subCat.endAngle);

		this.g.append("path")
			.attr("d", textArc)
			.attr("transform", `translate(${centerX}, ${centerY})`)
			.attr("id", "subCat_" + id);

		let textMiddle = (subCat.firstQuestionIdx + subCat.questionsNr / 2) / questionsNr;
		let offset = textMiddle > turnTextThresholds[0] && textMiddle < turnTextThresholds[1] ? 1 : 0;
		let startOffset = 25 + 50 * offset;
		
		let lines = subCat.title.split("\n");
		let linesNr = lines.length;

		lines.forEach((line, i) => {
			this.g.append("text")
			.attr("class", "subCatTitle")
			.attr("dy", linesNr === 1 ? fontSize / 3 : (((-linesNr / 2) + i) + 0.75) * fontSize)
		   	.append("textPath")
			.attr("xlink:href", "#subCat_" + id)
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
			questionsNr = this.cfg.questionsNr,
			pixel = this.cfg.pixel,
			subCatLineWidth = this.cfg.subCatLineWidth;
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
			.style("stroke-width", (pixel * subCatLineWidth) + "px");
	}
}