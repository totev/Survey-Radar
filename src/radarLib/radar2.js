import MainCategories from './mainCategories.js'
import SubCategories from './subCategories.js'
import Questions from './questions.js'
import Circles from './circles.js'

export default class Radar2 {

	constructor(mainCats, config) {
		this.circles = JSON.parse(JSON.stringify(this.constructor.circles));
		this.mainCats = JSON.parse(JSON.stringify(mainCats)); // create clone to avoid messing with the input data

		let cfg = JSON.parse(JSON.stringify(this.constructor.cfg));
		this.cfg = this.prepareConfig(Object.assign(cfg, config));
	}

	prepareConfig(cfg) {
		for(let mainCat of this.mainCats) {
			for(let subCat of mainCat.subCats) {
				cfg.questionsNr += subCat.questions.length;
			}
		}	
		cfg.centerX = cfg.w/2;
		cfg.centerY = cfg.h/2;
		cfg.radius = Math.min(cfg.centerX, cfg.centerY);
		cfg.pixel = cfg.radius / 400;

		return cfg;
	}
	

	render(containerId) {
		let cfg = this.cfg;

		d3.select(containerId).select("svg").remove();
			
		let g = d3.select(containerId)
				.append("svg")
				.attr("width", cfg.w + cfg.ExtraWidthX)
				.attr("height", cfg.h + cfg.ExtraWidthY)
				.append("g")
				.attr("transform", `translate(${cfg.TranslateX}, ${cfg.TranslateY})`);



		let c = new Circles(g, cfg, this.circles);

		let subCatTitleInnerRadiusPct = c.circles[10].radiusPct,
			subCatTitleOuterRadiusPct = c.circles[11].radiusPct,
			questionsTitleInnerRadiusPct = c.circles[9].radiusPct,
			questionsTitleOuterRadiusPct = subCatTitleInnerRadiusPct;

		let mc = new MainCategories(g, cfg, this.mainCats, subCatTitleOuterRadiusPct);

		let subCats = this.mainCats.map((mainCat) => mainCat.subCats)
							.reduce((aggregate, next) => aggregate.concat(next));
		let sc = new SubCategories(g, cfg, subCats, subCatTitleInnerRadiusPct, subCatTitleOuterRadiusPct, subCatTitleOuterRadiusPct);

		let questions = subCats.map((subCat) => subCat.questions)
							.reduce((aggregate, next) => aggregate.concat(next));
		let q = new Questions(g, cfg, questions, cfg.centerDotSize, questionsTitleInnerRadiusPct, questionsTitleOuterRadiusPct);

		mc.renderTitles();
		sc.renderTitles(true);		
		q.renderTitles();

		c.renderCircles("scale");

		q.renderMinMaxs();

		q.renderLines();
		sc.renderLines();
		mc.renderLines();

		c.renderCircles("heading");
		c.renderCenterDot();
		c.renderLegend();

		q.renderAverages();
		q.renderAllDetails();
	}
}

Radar2.cfg = {
		 	w: 800,
		 	h: 800,
		 	radians: 2 * Math.PI,
		 	TranslateX: 80,
		 	TranslateY: 30,
		 	ExtraWidthX: 100,
		 	ExtraWidthY: 100,
		 	questionsNr: 0,
		 	turnTextThresholds: [0.25, 0.75],
		 	backgroundOpacity: 0.1,
		 	mainCatFontSize: 0.7,
		 	mainCatLetterSpacing: 5,
		 	centerDotSize: 0.04,
		 	subCatFontSize: 0.35,
		 	questionFontSize: 0.26,
		 	tooltipFontSize: 7,
		 	legendDotPct: 0.015,
			mainCatLineWidth: 3,
			subCatLineWidth: 2,
			questionLineWidth: 1,
			minMaxColor: "rgba(128, 128, 128, 0.33)",
			avgLineColor: "rgba(179,10,10,1)"
		};

Radar2.circles = [{
		height: 0.07, // percentage of total radius
		stroke: "grey",
		strength: 1,
		type: "scale"
	}, {
		height: 0.07, // percentage of total radius
		stroke: "grey",
		strength: 1,
		legendValue: 20,
		type: "scale"
	}, {
		height: 0.07, // percentage of total radius
		stroke: "grey",
		strength: 1,
		type: "scale"
	}, {
		height: 0.07, // percentage of total radius
		stroke: "grey",
		strength: 1,
		legendValue: 40,
		type: "scale"
	}, {
		height: 0.07, // percentage of total radius
		stroke: "grey",
		strength: 1,
		type: "scale"
	}, {
		height: 0.07, // percentage of total radius
		stroke: "grey",
		strength: 1,
		legendValue: 60,
		type: "scale"
	}, {
		height: 0.07, // percentage of total radius
		stroke: "grey",
		strength: 1,
		type: "scale"
	}, {
		height: 0.07, // percentage of total radius
		stroke: "grey",
		strength: 1,
		legendValue: 80,
		type: "scale"
	}, {
		height: 0.07, // percentage of total radius
		stroke: "grey",
		strength: 1,
		type: "scale"
	}, {
		height: 0.07, // percentage of total radius
		stroke: "black",
		strength: 1,
		type: "heading"
	}, {
		height: 0.08, // percentage of total radius
		stroke: "black",
		strength: 1,
		type: "heading"
	}, {
		height: 0.08, // percentage of total radius
		stroke: "black",
		strength: 1,
		type: "heading"
	}];