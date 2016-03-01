import MainCategories from './mainCategories.js'
import SubCategories from './subCategories.js'
import Questions from './questions.js'
import Circles from './circles.js'


export default class Radar1 {

	constructor(mainCats, config) {
		this.circles = this.constructor.circles;
		this.mainCats = JSON.parse(JSON.stringify(mainCats));
		this.cfg = this.prepareConfig(Object.assign(this.constructor.cfg, config));
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

		let subCatTitleInnerRadiusPct = c.circles[3].radiusPct,
			subCatTitleOuterRadiusPct = c.circles[4].radiusPct,
			questionsStartRadiusPct = subCatTitleOuterRadiusPct,
			questionsTitleInnerRadiusPct = c.circles[8].radiusPct,
			questionsTitleOuterRadiusPct = c.circles[9].radiusPct;

		let mc = new MainCategories(g, cfg, this.mainCats, questionsTitleOuterRadiusPct);

		let subCats = this.mainCats.map((mainCat) => mainCat.subCats)
							.reduce((aggregate, next) => aggregate.concat(next));
		let sc = new SubCategories(g, cfg, subCats, subCatTitleInnerRadiusPct, subCatTitleOuterRadiusPct, questionsTitleOuterRadiusPct);

		let questions = subCats.map((subCat) => subCat.questions)
							.reduce((aggregate, next) => aggregate.concat(next));
		let q = new Questions(g, cfg, questions, subCatTitleOuterRadiusPct, questionsTitleInnerRadiusPct, questionsTitleOuterRadiusPct);


		mc.renderBackgrounds();

		q.renderTitles();
		sc.renderTitles();
		mc.renderTitles();

		c.renderCircles("scale");

		sc.renderFillings();
		q.renderFillings();

		q.renderLines();
		sc.renderLines();
		mc.renderLines();

		c.renderCircles("heading");
		c.renderCenterDot();
		c.renderLegend();
	}
}

Radar1.cfg = {
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
		 	subCatFontSize: 0.36,
		 	questionFontSize: 0.26,
		 	centerDotPct: 0.04,
		 	legendDotPct: 0.015
		};


Radar1.circles = [{
		height: 0.09, // percentage of total radius
		stroke: "grey",
		strength: 1,
		legendValue: 25,
		type: "scale"
	}, {
		height: 0.09, // percentage of total radius
		stroke: "grey",
		strength: 1,
		legendValue: 50,
		type: "scale"
	}, {
		height: 0.09, // percentage of total radius
		stroke: "grey",
		strength: 1,
		legendValue: 75,
		type: "scale"
	}, {
		height: 0.09, // percentage of total radius
		stroke: "black",
		strength: 1,
		type: "heading"
	}, {
		height: 0.09, // percentage of total radius
		stroke: "black",
		strength: 1,
		type: "heading"
	}, {
		height: 0.08, // percentage of total radius
		stroke: "grey",
		strength: 1,
		legendValue: 25,
		type: "scale"
	}, {
		height: 0.08, // percentage of total radius
		stroke: "grey",
		strength: 1,
		legendValue: 50,
		type: "scale"
	}, {
		height: 0.08, // percentage of total radius
		stroke: "grey",
		strength: 1,
		legendValue: 75,
		type: "scale"
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