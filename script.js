var w = 1000,
	h = 1000;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Smartphone','Tablet'];

//Data
var d = [
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
						value: 0.4
					}, {
						title: "Team",
						color: "rgba(59, 128, 62, 0.7)",
						value: 0.4
					}, {
						title: "Stakeholder",
						color: "rgba(59, 128, 62, 0.7)",
						value: 0.4
					}]
				}, {
					title: "Measurements",
					color: "rgba(59, 128, 62, 0.9)",
					value: 0.3,
					questions: [{
						title: "Predictable\nVelocity",
						color: "rgba(59, 128, 62, 0.9)",
						value: 0.3
					}, {
						title: "Time to\nMarket",
						color: "rgba(59, 128, 62, 0.9)",
						value: 0.4
					}, {
						title: "Value\nDelivered",
						color: "rgba(59, 128, 62, 0.9)",
						value: 0.4
					}, {
						title: "Quality",
						color: "rgba(59, 128, 62, 0.9)",
						value: 0.9
					}, {
						title: "Response\nto Change",
						color: "rgba(59, 128, 62, 0.9)",
						value: 0.4
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
						value: 0.4
					}, {
						title: "People\nDevelopment",
						color: "rgba(90, 80, 140, 0.5)",
						value: 0.8
					}, {
						title: "Servant\nLeadership",
						color: "rgba(90, 80, 140, 0.5)",
						value: 0.8
					}]
				}, {
					title: "Product\nOwner",
					color: "rgba(90, 80, 140, 0.8)",
					value: 0.7,
					questions: [{
						title: "Leadership",
						color: "rgba(90, 80, 140, 0.8)",
						value: 0.4
					}, {
						title: "Backlog\nMgmt.",
						color: "rgba(90, 80, 140, 0.8)",
						value: 0.8
					}, {
						title: "Engagement",
						color: "rgba(90, 80, 140, 0.8)",
						value: 0.8
					}]
				}, {
					title: "Technical\nLead(s)",
					color: "rgba(90, 80, 140, 0.6)",
					value: 0.2,
					questions: [{
						title: "Technical\nLeadership",
						color: "rgba(90, 80, 140, 0.6)",
						value: 0.4
					}, {
						title: "Servant\nLeadership",
						color: "rgba(90, 80, 140, 0.6)",
						value: 0.8
					}]
				}, {
					title: "Team\nFacilitator",
					color: "rgba(90, 80, 140, 0.9)",
					value: 0.6,
					questions: [{
						title: "Impediment\nMgmt.",
						color: "rgba(90, 80, 140, 0.9)",
						value: 0.4
					}, {
						title: "Servant\nLeadership",
						color: "rgba(90, 80, 140, 0.9)",
						value: 0.8
					}, {
						title: "Effective\nFacilitation",
						color: "rgba(90, 80, 140, 0.9)",
						value: 0.8
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
						value: 0.4
					}, {
						title: "Creativity",
						color: "rgba(181, 48, 60, 0.9)",
						value: 0.2
					}, {
						title: "Trust\n& Respect",
						color: "rgba(181, 48, 60, 0.9)",
						value: 0.2
					}, {
						title: "Collaboration",
						color: "rgba(181, 48, 60, 0.9)",
						value: 0.2
					}, {
						title: "Happiness",
						color: "rgba(181, 48, 60, 0.9)",
						value: 0.2
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
						value: 0.4
					}, {
						title: "Planning\n& Estimating",
						color: "rgba(27, 86, 166, 0.4)",
						value: 0.4
					}, {
						title: "Technical\nExcellence",
						color: "rgba(27, 86, 166, 0.4)",
						value: 0.8
					}, {
						title: "Self\nOrganization",
						color: "rgba(27, 86, 166, 0.4)",
						value: 0.2
					}, {
						title: "Sustainable\nPace",
						color: "rgba(27, 86, 166, 0.4)",
						value: 0.2
					}]
				}, {
					title: "Team\nStructure",
					color: "rgba(27, 86, 166, 0.8)",
					value: 0.3,
					questions: [{
						title: "Size\n& Skills",
						color: "rgba(27, 86, 166, 0.8)",
						value: 0.3
					}, {
						title: "Allocation\n& Stability",
						color: "rgba(27, 86, 166, 0.8)",
						value: 0.4
					}, {
						title: "Environment",
						color: "rgba(27, 86, 166, 0.8)",
						value: 0.2
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
						value: 0.4
					}, {
						title: "Measure\nof Success",
						color: "rgba(208, 89, 61, 0.5)",
						value: 0.8
					}]
				}, {
					title: "Planning",
					color: "rgba(208, 89, 61, 0.9)",
					value: 0.3,
					questions: [{
						title: "Roadmap",
						color: "rgba(208, 89, 61, 0.9)",
						value: 0.3
					}, {
						title: "Release Plan",
						color: "rgba(208, 89, 61, 0.9)",
						value: 0.4
					}, {
						title: "Iteration Plan",
						color: "rgba(208, 89, 61, 0.9)",
						value: 0.2
					}]
				}, {
					title: "Roles",
					color: "rgba(208, 89, 61, 0.7)",
					value: 0.3,
					questions: [{
						title: "Roles",
						color: "rgba(208, 89, 61, 0.7)",
						value: 0.7
					}, {
						title: "Generalizing\nSpecialists",
						color: "rgba(208, 89, 61, 0.7)",
						value: 0.99
					}]
				}]
			}
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)