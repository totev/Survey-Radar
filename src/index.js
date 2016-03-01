import Radar1 from './radar1.js'
import Radar2 from './radar2.js'

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
							title: "asd1",
							value: 0.111
						}, {
							title: "asd2",
							value: 0.444
						}, {
							title: "asd3",
							value: 0.222
						}, {
							title: "asd4",
							value: 0.888
						}, {
							title: "asd5",
							value: 0.333
						}]
					}, {
						title: "Team",
						color: "rgba(59, 128, 62, 0.7)",
						value: 0.4,
						details: [{
							title: "bsd1",
							value: 0.555
						}, {
							title: "bsd2",
							value: 0.444
						}, {
							title: "",
							value: 0.222
						}, {
							title: "",
							value: 0.444
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
							value: 0.666
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

let r1 = new Radar1(mainCats, {
	h: 400,
	w: 400
});
r1.render('#surveyRadar1');

let r2 = new Radar2(mainCats, {
	subCatFontSize: 0.45
});
r2.render('#surveyRadar2');