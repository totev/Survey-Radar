export default class Circles {

	constructor(g, cfg) {
		this.g = g;
		this.cfg = {
			radius: cfg.radius,
			centerX: cfg.centerX,
			centerY: cfg.centerY,
			centerDotPct: cfg.centerDotPct,
			legendDotPct: cfg.legendDotPct
		};
		this.circles = this.constructor.circles;
		this.prepare();
	}

	prepare() {
		let centerDotPct = this.cfg.centerDotPct;

		this.circles[0].height += centerDotPct;

		let radiusPct = 0;
		for(let circle of this.circles) {
			radiusPct += circle.height;
			circle.radiusPct = radiusPct;
		}

		this.subCatTitleInnerRadiusPct = this.circles[3].radiusPct;
		this.subCatTitleOuterRadiusPct = this.circles[4].radiusPct;
		this.questionsStartRadiusPct = this.subCatTitleOuterRadiusPct;
		this.questionsTitleInnerRadiusPct = this.circles[8].radiusPct;
		this.questionsTitleOuterRadiusPct = this.circles[9].radiusPct;
	}

	renderCircles(type) {
		let radius = this.cfg.radius,
			centerX = this.cfg.centerX,
			centerY = this.cfg.centerY;

		let circles = !type ? this.circles : this.circles.filter((c) => c.type === type);

		this.g.selectAll(".circle")
			.data(circles)
			.enter()
			.append("circle")
			.attr("cx", centerX)
			.attr("cy", centerY)
			.attr("r", (c) => c.radiusPct * radius)
			.attr("fill", "none")
			.attr("stroke", (c) => c.stroke)
			.attr("stroke-width", (c) => c.strength);
	}
	
	renderCenterDot() {
		let centerX = this.cfg.centerX,
			centerY = this.cfg.centerY,
			centerDotPct = this.cfg.centerDotPct,
			radius = this.cfg.radius;

		this.g.append("circle")
		.attr("cx", centerX)
		.attr("cy", centerY)
		.attr("r", centerDotPct * radius)
		.attr("fill", "black");
	}

	renderLegend() {
		let legendDotPct = this.cfg.legendDotPct,
			centerX = this.cfg.centerX,
			centerY = this.cfg.centerY,
			radius = this.cfg.radius;

		let legendFontSize = legendDotPct * radius * 1.3;

		for(let circle of this.circles) {
			let posY = centerY - circle.radiusPct * radius;

			if(circle.legendValue) {
				var group = this.g.append("g")
					.attr("transform", `translate(${centerX}, ${posY})`);

				group.append("circle")
					.attr("cx", 0)
					.attr("cy", 0)
					.attr("r", legendDotPct * radius);

				group.append("text")
					.attr("fill", "white")
					.attr("text-anchor", "middle")
					.attr("dy", legendFontSize / 3)
					.text(circle.legendValue)
					.style("font-size", legendFontSize + "px");
			}
		}
	}
}

Circles.circles =  [{
		height: 0.09, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		legendValue: 25,
		type: "scale"
	}, {
		height: 0.09, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		legendValue: 50,
		type: "scale"
	}, {
		height: 0.09, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		legendValue: 75,
		type: "scale"
	}, {
		height: 0.09, // percentage of total radius
		stroke: "black",
		strength: "1px",
		type: "heading"
	}, {
		height: 0.09, // percentage of total radius
		stroke: "black",
		strength: "1px",
		type: "heading"
	}, {
		height: 0.08, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		legendValue: 25,
		type: "scale"
	}, {
		height: 0.08, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		legendValue: 50,
		type: "scale"
	}, {
		height: 0.08, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		legendValue: 75,
		type: "scale"
	}, {
		height: 0.08, // percentage of total radius
		stroke: "black",
		strength: "1px",
		type: "heading"
	}, {
		height: 0.08, // percentage of total radius
		stroke: "black",
		strength: "1px",
		type: "heading"
	}];