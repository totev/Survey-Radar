import MainCategories from './mainCategories.js'
import SubCategories from './subCategories.js'
import Questions from './questions.js'
import Circles from './circles.js'

let circles = [{
		height: 0.07, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		type: "scale"
	}, {
		height: 0.07, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		legendValue: 20,
		type: "scale"
	}, {
		height: 0.07, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		type: "scale"
	}, {
		height: 0.07, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		legendValue: 40,
		type: "scale"
	}, {
		height: 0.07, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		type: "scale"
	}, {
		height: 0.07, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		legendValue: 60,
		type: "scale"
	}, {
		height: 0.07, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		type: "scale"
	}, {
		height: 0.07, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		legendValue: 80,
		type: "scale"
	}, {
		height: 0.07, // percentage of total radius
		stroke: "grey",
		strength: "1px",
		type: "scale"
	}, {
		height: 0.07, // percentage of total radius
		stroke: "black",
		strength: "1px",
		type: "heading"
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

let mainCats = [
			{
				mainCat: "PERFORMANCE",
				color: "rgba(59, 128, 62, 1)",
				subCats: [{
					title: "Confidence",
					color: "rgba(59, 128, 62, 0.7)",
					value: 0.6,
					questions: [{
						title: "Product\nOwner",
						color: "rgba(59, 128, 62, 0.7)",
						value: 0.4,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Team",
						color: "rgba(59, 128, 62, 0.7)",
						value: 0.4,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Stakeholder",
						color: "rgba(59, 128, 62, 0.7)",
						value: 0.4,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}]
				}, {
					title: "Measurements",
					color: "rgba(59, 128, 62, 0.9)",
					value: 0.3,
					questions: [{
						title: "Predictable\nVelocity",
						color: "rgba(59, 128, 62, 0.9)",
						value: 0.3,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Time to\nMarket",
						color: "rgba(59, 128, 62, 0.9)",
						value: 0.4,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Value\nDelivered",
						color: "rgba(59, 128, 62, 0.9)",
						value: 0.4,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Quality",
						color: "rgba(59, 128, 62, 0.9)",
						value: 0.9,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Response\nto Change",
						color: "rgba(59, 128, 62, 0.9)",
						value: 0.4,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}]
				}]
			}, {
				mainCat: "LEADERSHIP",
				color: "rgba(90, 80, 140, 1)",
				subCats: [{
					title: "Mgmt.",
					color: "rgba(90, 80, 140, 0.5)",
					value: 0.6,
					questions: [{
						title: "Process\nImprovement",
						color: "rgba(90, 80, 140, 0.5)",
						value: 0.4,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "People\nDevelopment",
						color: "rgba(90, 80, 140, 0.5)",
						value: 0.8,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Servant\nLeadership",
						color: "rgba(90, 80, 140, 0.5)",
						value: 0.8,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}]
				}, {
					title: "Product\nOwner",
					color: "rgba(90, 80, 140, 0.8)",
					value: 0.7,
					questions: [{
						title: "Leadership",
						color: "rgba(90, 80, 140, 0.8)",
						value: 0.4,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Backlog\nMgmt.",
						color: "rgba(90, 80, 140, 0.8)",
						value: 0.8,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Engagement",
						color: "rgba(90, 80, 140, 0.8)",
						value: 0.8,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}]
				}, {
					title: "Technical\nLead(s)",
					color: "rgba(90, 80, 140, 0.6)",
					value: 0.2,
					questions: [{
						title: "Technical\nLeadership",
						color: "rgba(90, 80, 140, 0.6)",
						value: 0.4,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Servant\nLeadership",
						color: "rgba(90, 80, 140, 0.6)",
						value: 0.8,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}]
				}, {
					title: "Team\nFacilitator",
					color: "rgba(90, 80, 140, 0.9)",
					value: 0.6,
					questions: [{
						title: "Impediment\nMgmt.",
						color: "rgba(90, 80, 140, 0.9)",
						value: 0.4,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Servant\nLeadership",
						color: "rgba(90, 80, 140, 0.9)",
						value: 0.8,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Effective\nFacilitation",
						color: "rgba(90, 80, 140, 0.9)",
						value: 0.8,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}]
				}]
			}, {
				mainCat: "CULTURE",
				color: "rgba(181, 48, 60, 1)",
				subCats: [{
					title: "Team Dynamics",
					color: "rgba(181, 48, 60, 0.9)",
					value: 0.3,
					questions: [{
						title: "Accountability",
						color: "rgba(181, 48, 60, 0.9)",
						value: 0.4,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Creativity",
						color: "rgba(181, 48, 60, 0.9)",
						value: 0.2,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Trust\n& Respect",
						color: "rgba(181, 48, 60, 0.9)",
						value: 0.2,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Collaboration",
						color: "rgba(181, 48, 60, 0.9)",
						value: 0.2,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Happiness",
						color: "rgba(181, 48, 60, 0.9)",
						value: 0.2,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}]
				}]
			}, {
				mainCat: "FOUNDATION",
				color: "rgba(27, 86, 166, 1)",
				subCats: [{
					title: "Agility",
					color: "rgba(27, 86, 166, 0.4)",
					value: 0.6,
					questions: [{
						title: "Effective\nMeetings",
						color: "rgba(27, 86, 166, 0.4)",
						value: 0.4,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Planning\n& Estimating",
						color: "rgba(27, 86, 166, 0.4)",
						value: 0.4,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Technical\nExcellence",
						color: "rgba(27, 86, 166, 0.4)",
						value: 0.8,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Self\nOrganization",
						color: "rgba(27, 86, 166, 0.4)",
						value: 0.2,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Sustainable\nPace",
						color: "rgba(27, 86, 166, 0.4)",
						value: 0.2,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}]
				}, {
					title: "Team\nStructure",
					color: "rgba(27, 86, 166, 0.8)",
					value: 0.3,
					questions: [{
						title: "Size\n& Skills",
						color: "rgba(27, 86, 166, 0.8)",
						value: 0.3,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Allocation\n& Stability",
						color: "rgba(27, 86, 166, 0.8)",
						value: 0.4,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Environment",
						color: "rgba(27, 86, 166, 0.8)",
						value: 0.2,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}]
				}]
			}, {
				mainCat: "CLARITY",
				color: "#d0593d",
				subCats: [{
					title: "Vision",
					color: "rgba(208, 89, 61, 0.5)",
					value: 0.6,
					questions: [{
						title: "Vision\n& Purpose",
						color: "rgba(208, 89, 61, 0.5)",
						value: 0.4,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Measure\nof Success",
						color: "rgba(208, 89, 61, 0.5)",
						value: 0.8,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}]
				}, {
					title: "Planning",
					color: "rgba(208, 89, 61, 0.9)",
					value: 0.3,
					questions: [{
						title: "Roadmap",
						color: "rgba(208, 89, 61, 0.9)",
						value: 0.3,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Release Plan",
						color: "rgba(208, 89, 61, 0.9)",
						value: 0.4,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Iteration Plan",
						color: "rgba(208, 89, 61, 0.9)",
						value: 0.2,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}]
				}, {
					title: "Roles",
					color: "rgba(208, 89, 61, 0.7)",
					value: 0.3,
					questions: [{
						title: "Roles",
						color: "rgba(208, 89, 61, 0.7)",
						value: 0.7,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}, {
						title: "Generalizing\nSpecialists",
						color: "rgba(208, 89, 61, 0.7)",
						value: 0.99,
						details: [{
							title: "",
							value: 0.111
						}, {
							title: "",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.888
						}, {
							title: "",
							value: 0.333
						}]
					}]
				}]
			}
		];



let cfg = {
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
	 	mainCatLetterSpacing: 2,
	 	centerDotSize: 0.04,
	 	subCatFontSize: 0.36,
	 	questionFontSize: 0.26,
	 	centerDotPct: 0.04,
	 	legendDotPct: 0.015
	};

for(let mainCat of mainCats) {
	for(let subCat of mainCat.subCats) {
		cfg.questionsNr += subCat.questions.length;
	}
}

cfg.centerX = cfg.w/2;
cfg.centerY = cfg.h/2;
cfg.radius = Math.min(cfg.centerX, cfg.centerY);

let id = "#surveyRadar2";
d3.select(id).select("svg").remove();
	
let g = d3.select(id)
		.append("svg")
		.attr("width", cfg.w + cfg.ExtraWidthX)
		.attr("height", cfg.h + cfg.ExtraWidthY)
		.append("g")
		.attr("transform", `translate(${cfg.TranslateX}, ${cfg.TranslateY})`);



let c = new Circles(g, cfg, circles);

let subCatTitleInnerRadiusPct = c.circles[10].radiusPct,
	subCatTitleOuterRadiusPct = c.circles[11].radiusPct,
	questionsTitleInnerRadiusPct = c.circles[9].radiusPct,
	questionsTitleOuterRadiusPct = subCatTitleInnerRadiusPct;

let mc = new MainCategories(g, cfg, mainCats, subCatTitleOuterRadiusPct);

let subCats = mainCats.map((mainCat) => mainCat.subCats)
					.reduce((aggregate, next) => aggregate.concat(next));
let sc = new SubCategories(g, cfg, subCats, subCatTitleInnerRadiusPct, subCatTitleOuterRadiusPct, subCatTitleOuterRadiusPct);

let questions = subCats.map((subCat) => subCat.questions)
					.reduce((aggregate, next) => aggregate.concat(next));
let q = new Questions(g, cfg, questions, cfg.centerDotPct, questionsTitleInnerRadiusPct, questionsTitleOuterRadiusPct);


q.renderTitles();
sc.renderTitles(true);
mc.renderTitles();


c.renderCircles("scale");


q.renderLines();
sc.renderLines();
mc.renderLines();

c.renderCircles("heading");
c.renderCenterDot();
c.renderLegend();

q.renderAverages();