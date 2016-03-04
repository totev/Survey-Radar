export default class Circles {

	constructor(g, cfg, circles) {
		this.g = g;
		this.cfg = {
			radius: cfg.radius,
			centerX: cfg.centerX,
			centerY: cfg.centerY,
			centerDotSize: cfg.centerDotSize,
			legendDotPct: cfg.legendDotPct,
			pixel: cfg.pixel
		};
		this.circles = circles;
		this.prepare();
	}

	prepare() {
		let centerDotSize = this.cfg.centerDotSize;

		this.circles[0].height += centerDotSize;

		let radiusPct = 0;
		for(let circle of this.circles) {
			radiusPct += circle.height;
			circle.radiusPct = radiusPct;
		}
	}

	renderCircles(type) {
		let radius = this.cfg.radius,
			centerX = this.cfg.centerX,
			centerY = this.cfg.centerY,
			pixel = this.cfg.pixel;

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
			.attr("stroke-width", (c) => (c.strength * pixel) + "px");
	}
	
	renderCenterDot() {
		let centerX = this.cfg.centerX,
			centerY = this.cfg.centerY,
			centerDotSize = this.cfg.centerDotSize,
			radius = this.cfg.radius;

		this.g.append("circle")
		.attr("cx", centerX)
		.attr("cy", centerY)
		.attr("r", centerDotSize * radius)
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