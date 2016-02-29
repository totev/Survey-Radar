/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _mainCategories = __webpack_require__(2);

	var _mainCategories2 = _interopRequireDefault(_mainCategories);

	var _subCategories = __webpack_require__(3);

	var _subCategories2 = _interopRequireDefault(_subCategories);

	var _questions = __webpack_require__(4);

	var _questions2 = _interopRequireDefault(_questions);

	var _circles = __webpack_require__(5);

	var _circles2 = _interopRequireDefault(_circles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mainCats = [{
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
	}];

	var cfg = {
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

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = mainCats[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var mainCat = _step.value;
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = mainCat.subCats[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var subCat = _step2.value;

					cfg.questionsNr += subCat.questions.length;
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	cfg.centerX = cfg.w / 2;
	cfg.centerY = cfg.h / 2;
	cfg.radius = Math.min(cfg.centerX, cfg.centerY);

	var id = "#surveyRadar1";
	d3.select(id).select("svg").remove();

	var g = d3.select(id).append("svg").attr("width", cfg.w + cfg.ExtraWidthX).attr("height", cfg.h + cfg.ExtraWidthY).append("g").attr("transform", 'translate(' + cfg.TranslateX + ', ' + cfg.TranslateY + ')');

	var c = new _circles2.default(g, cfg);

	var mc = new _mainCategories2.default(g, cfg, mainCats, c.questionsTitleOuterRadiusPct);

	var subCats = mainCats.map(function (mainCat) {
		return mainCat.subCats;
	}).reduce(function (aggregate, next) {
		return aggregate.concat(next);
	});
	var sc = new _subCategories2.default(g, cfg, subCats, c.subCatTitleInnerRadiusPct, c.subCatTitleOuterRadiusPct, c.questionsTitleOuterRadiusPct);

	var questions = subCats.map(function (subCat) {
		return subCat.questions;
	}).reduce(function (aggregate, next) {
		return aggregate.concat(next);
	});
	var q = new _questions2.default(g, cfg, questions, c.subCatTitleOuterRadiusPct, c.questionsTitleInnerRadiusPct, c.questionsTitleOuterRadiusPct);

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

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MainCategories = function () {
		function MainCategories(g, cfg, mainCats, innerTitleRadiusPct) {
			_classCallCheck(this, MainCategories);

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

		_createClass(MainCategories, [{
			key: "prepare",
			value: function prepare() {
				var radians = this.cfg.radians,
				    questionsNr = this.cfg.questionsNr;
				var questionCounter = 0;

				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = this.mainCats[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var mainCat = _step.value;

						mainCat.questionsNr = 0;
						mainCat.firstQuestionIdx = questionCounter;

						var _iteratorNormalCompletion2 = true;
						var _didIteratorError2 = false;
						var _iteratorError2 = undefined;

						try {
							for (var _iterator2 = mainCat.subCats[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
								var subCat = _step2.value;

								mainCat.questionsNr += subCat.questions.length;
							}
						} catch (err) {
							_didIteratorError2 = true;
							_iteratorError2 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion2 && _iterator2.return) {
									_iterator2.return();
								}
							} finally {
								if (_didIteratorError2) {
									throw _iteratorError2;
								}
							}
						}

						mainCat.startAngle = radians / questionsNr * questionCounter;
						mainCat.endAngle = radians / questionsNr * (questionCounter + mainCat.questionsNr);
						questionCounter += mainCat.questionsNr;
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
		}, {
			key: "renderBackgrounds",
			value: function renderBackgrounds() {
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = this.mainCats[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var mainCat = _step3.value;

						this.renderBackground(mainCat);
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}
			}
		}, {
			key: "renderTitles",
			value: function renderTitles() {
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = this.mainCats[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var mainCat = _step4.value;

						this.renderTitle(mainCat);
					}
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}
			}
		}, {
			key: "renderBackground",
			value: function renderBackground(mainCat) {
				var centerX = this.cfg.centerX,
				    centerY = this.cfg.centerY,
				    innerTitleRadius = this.innerTitleRadius,
				    backgroundOpacity = this.cfg.backgroundOpacity;

				var backgroundArc = d3.svg.arc().innerRadius(1).outerRadius(innerTitleRadius).startAngle(mainCat.startAngle).endAngle(mainCat.endAngle);

				this.g.append("path").attr("class", "arc").attr("d", backgroundArc).attr("transform", "translate(" + centerX + ", " + centerY + ")").attr("fill", mainCat.color).attr("stroke", mainCat.color).style("opacity", backgroundOpacity);
			}
		}, {
			key: "renderTitle",
			value: function renderTitle(mainCat) {
				var centerX = this.cfg.centerX,
				    centerY = this.cfg.centerY,
				    innerTitleRadius = this.innerTitleRadius,
				    radius = this.cfg.radius,
				    questionsNr = this.cfg.questionsNr,
				    mainCatFontSize = this.cfg.mainCatFontSize,
				    letterSpacing = this.cfg.mainCatLetterSpacing,
				    turnTextThresholds = this.cfg.turnTextThresholds;

				var arc = d3.svg.arc().innerRadius(innerTitleRadius).outerRadius(radius).startAngle(mainCat.startAngle).endAngle(mainCat.endAngle);

				var textArc = d3.svg.arc().innerRadius(innerTitleRadius + (radius - innerTitleRadius) / 2).outerRadius(innerTitleRadius + (radius - innerTitleRadius) / 2).startAngle(mainCat.startAngle).endAngle(mainCat.endAngle);

				this.g.append("path").attr("class", "arc").attr("d", arc).attr("transform", "translate(" + centerX + ", " + centerY + ")").attr("fill", mainCat.color).attr("stroke", mainCat.color);

				this.g.append("path").attr("d", textArc).attr("transform", "translate(" + centerX + ", " + centerY + ")").attr("id", "mainCat_" + mainCat.firstQuestionIdx);

				var textMiddle = (mainCat.firstQuestionIdx + mainCat.questionsNr / 2) / questionsNr;
				var offset = textMiddle > turnTextThresholds[0] && textMiddle < turnTextThresholds[1] ? 1 : 0;
				var startOffset = 25 + 50 * offset;
				var fontSize = (radius - innerTitleRadius) * mainCatFontSize;

				this.g.append("text").attr("class", "mainCatTitle").attr("dy", fontSize / 3).append("textPath").attr("xlink:href", "#mainCat_" + mainCat.firstQuestionIdx).text(mainCat.mainCat).attr("fill", "white").attr("startOffset", startOffset + "%").style("text-anchor", "middle").style("font-size", fontSize + "px").style("letter-spacing", letterSpacing + "px");
			}
		}, {
			key: "renderLines",
			value: function renderLines() {
				var radians = this.cfg.radians,
				    questionsNr = this.cfg.questionsNr,
				    centerX = this.cfg.centerX,
				    centerY = this.cfg.centerY;

				var mainCatAxis = this.g.selectAll(".mainAxis").data(this.mainCats).enter().append("g").attr("class", "mainAxis");

				mainCatAxis.append("line").attr("x1", centerX).attr("y1", centerY).attr("x2", function (mainCat) {
					return centerX * (1 - Math.sin(-mainCat.firstQuestionIdx * radians / questionsNr));
				}).attr("y2", function (mainCat, i) {
					return centerY * (1 - Math.cos(-mainCat.firstQuestionIdx * radians / questionsNr));
				}).attr("class", "line").style("stroke", "black").style("stroke-width", "3px");
			}
		}]);

		return MainCategories;
	}();

	exports.default = MainCategories;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SubCategories = function () {
		function SubCategories(g, cfg, subCats, subCatTitleInnerRadiusPct, subCatTitleOuterRadiusPct, subAxisEndPct) {
			_classCallCheck(this, SubCategories);

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

		_createClass(SubCategories, [{
			key: "prepare",
			value: function prepare() {
				var radians = this.cfg.radians,
				    questionsNr = this.cfg.questionsNr;
				var questionCounter = 0;

				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = this.subCats[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var subCat = _step.value;

						subCat.firstQuestionIdx = questionCounter;
						subCat.questionsNr = subCat.questions.length;

						subCat.startAngle = radians / questionsNr * questionCounter;
						subCat.endAngle = radians / questionsNr * (questionCounter + subCat.questionsNr);
						questionCounter += subCat.questionsNr;
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
		}, {
			key: "renderFillings",
			value: function renderFillings() {
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = this.subCats[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var subCat = _step2.value;

						this.renderFilling(subCat);
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			}
		}, {
			key: "renderFilling",
			value: function renderFilling(subCat) {
				var centerX = this.cfg.centerX,
				    centerY = this.cfg.centerY;

				var centerDotSizePx = this.centerDotSizePx,
				    subCatTitleInnerRadius = this.subCatTitleInnerRadius,
				    subCatTitleOuterRadius = this.subCatTitleOuterRadius,
				    subCatTitleMiddleRadius = this.subCatTitleMiddleRadius;

				var fillingArc = d3.svg.arc().innerRadius(1).outerRadius(centerDotSizePx + (subCatTitleInnerRadius - centerDotSizePx) * subCat.value).startAngle(subCat.startAngle).endAngle(subCat.endAngle);

				this.g.append("path").attr("d", fillingArc).attr("transform", "translate(" + centerX + ", " + centerY + ")").attr("fill", subCat.color);
			}
		}, {
			key: "renderTitles",
			value: function renderTitles() {
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = this.subCats[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var subCat = _step3.value;

						this.renderTitle(subCat);
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}
			}
		}, {
			key: "renderTitle",
			value: function renderTitle(subCat) {
				var _this = this;

				var centerX = this.cfg.centerX,
				    centerY = this.cfg.centerY,
				    questionsNr = this.cfg.questionsNr,
				    subCatFontSize = this.cfg.subCatFontSize,
				    turnTextThresholds = this.cfg.turnTextThresholds;

				var subCatTitleInnerRadius = this.subCatTitleInnerRadius,
				    subCatTitleOuterRadius = this.subCatTitleOuterRadius,
				    subCatTitleMiddleRadius = this.subCatTitleMiddleRadius;

				var textArc = d3.svg.arc().innerRadius(subCatTitleMiddleRadius).outerRadius(subCatTitleMiddleRadius).startAngle(subCat.startAngle).endAngle(subCat.endAngle);

				this.g.append("path").attr("d", textArc).attr("transform", "translate(" + centerX + ", " + centerY + ")").attr("id", "subCat_" + subCat.firstQuestionIdx);

				var textMiddle = (subCat.firstQuestionIdx + subCat.questionsNr / 2) / questionsNr;
				var offset = textMiddle > turnTextThresholds[0] && textMiddle < turnTextThresholds[1] ? 1 : 0;
				var startOffset = 25 + 50 * offset;
				var fontSize = (subCatTitleOuterRadius - subCatTitleInnerRadius) * subCatFontSize;

				var lines = subCat.title.split("\n");
				var linesNr = lines.length;

				lines.forEach(function (line, i) {
					_this.g.append("text").attr("class", "subCatTitle").attr("dy", linesNr === 1 ? fontSize / 3 : (-linesNr / 2 + i + 0.75) * fontSize).append("textPath").attr("xlink:href", "#subCat_" + subCat.firstQuestionIdx).text(line).attr("startOffset", startOffset + "%").style("text-anchor", "middle").style("font-size", fontSize + "px");
				});
			}
		}, {
			key: "renderLines",
			value: function renderLines() {
				var centerX = this.cfg.centerX,
				    centerY = this.cfg.centerY,
				    radians = this.cfg.radians,
				    questionsNr = this.cfg.questionsNr;
				var subAxisEndPct = this.subAxisEndPct;

				var subCatAxis = this.g.selectAll(".subAxis").data(this.subCats).enter().append("g").attr("class", "subAxis");

				subCatAxis.append("line").attr("x1", centerX).attr("y1", centerY).attr("x2", function (subCat) {
					return centerX * (1 - subAxisEndPct * Math.sin(-subCat.firstQuestionIdx * radians / questionsNr));
				}).attr("y2", function (subCat) {
					return centerY * (1 - subAxisEndPct * Math.cos(-subCat.firstQuestionIdx * radians / questionsNr));
				}).attr("class", "line").style("stroke", "black").style("stroke-width", "2px");
			}
		}]);

		return SubCategories;
	}();

	exports.default = SubCategories;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Questions = function () {
		function Questions(g, cfg, questions, questionsStartRadiusPct, questionsTitleInnerRadiusPct, questionsTitleOuterRadiusPct) {
			_classCallCheck(this, Questions);

			this.g = g;
			this.cfg = {
				centerX: cfg.centerX,
				centerY: cfg.centerY,
				radians: cfg.radians,
				radius: cfg.radius,
				questionsNr: cfg.questionsNr,
				turnTextThresholds: cfg.turnTextThresholds,
				questionFontSize: cfg.questionFontSize
			};

			this.questions = questions;
			this.prepare();

			this.questionsStartRadius = questionsStartRadiusPct * this.cfg.radius;
			this.questionsStartRadiusPct = questionsStartRadiusPct;
			this.questionsTitleInnerRadius = questionsTitleInnerRadiusPct * this.cfg.radius;
			this.questionsTitleInnerRadiusPct = questionsTitleInnerRadiusPct;
			this.questionsTitleOuterRadius = questionsTitleOuterRadiusPct * this.cfg.radius;
			this.questionsTitleOuterRadiusPct = questionsTitleOuterRadiusPct;
			this.questionsTitleMiddleRadius = (questionsTitleInnerRadiusPct + (questionsTitleOuterRadiusPct - questionsTitleInnerRadiusPct) / 2) * this.cfg.radius;
		}

		_createClass(Questions, [{
			key: "prepare",
			value: function prepare() {
				var radians = this.cfg.radians,
				    questionsNr = this.cfg.questionsNr;

				this.questions.forEach(function (question, i) {
					question.idx = i;
					question.startAngle = radians / questionsNr * i;
					question.endAngle = radians / questionsNr * (i + 1);
				});
			}
		}, {
			key: "renderFillings",
			value: function renderFillings() {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = this.questions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var question = _step.value;

						this.renderFilling(question);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
		}, {
			key: "renderFilling",
			value: function renderFilling(question) {
				var centerX = this.cfg.centerX,
				    centerY = this.cfg.centerY;
				var questionsStartRadius = this.questionsStartRadius,
				    questionsTitleInnerRadius = this.questionsTitleInnerRadius;

				var fillingArc = d3.svg.arc().innerRadius(questionsStartRadius).outerRadius(questionsStartRadius + (questionsTitleInnerRadius - questionsStartRadius) * question.value).startAngle(question.startAngle).endAngle(question.endAngle);

				this.g.append("path").attr("d", fillingArc).attr("transform", "translate(" + centerX + ", " + centerY + ")").attr("fill", question.color);
			}
		}, {
			key: "renderTitles",
			value: function renderTitles() {
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = this.questions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var question = _step2.value;

						this.renderTitle(question);
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			}
		}, {
			key: "renderTitle",
			value: function renderTitle(question) {
				var _this = this;

				var centerX = this.cfg.centerX,
				    centerY = this.cfg.centerY,
				    questionsNr = this.cfg.questionsNr,
				    questionFontSize = this.cfg.questionFontSize,
				    turnTextThresholds = this.cfg.turnTextThresholds;
				var questionsTitleInnerRadius = this.questionsTitleInnerRadius,
				    questionsTitleOuterRadius = this.questionsTitleOuterRadius,
				    questionsTitleMiddleRadius = this.questionsTitleMiddleRadius;

				var textArc = d3.svg.arc().innerRadius(questionsTitleMiddleRadius).outerRadius(questionsTitleMiddleRadius).startAngle(question.startAngle).endAngle(question.endAngle);

				this.g.append("path").attr("d", textArc).attr("transform", "translate(" + centerX + ", " + centerY + ")").attr("id", "question_" + question.idx);

				var textMiddle = question.idx / questionsNr;
				var offset = textMiddle > turnTextThresholds[0] && textMiddle < turnTextThresholds[1] ? 1 : 0;
				var startOffset = 25 + 50 * offset;
				var fontSize = (questionsTitleOuterRadius - questionsTitleInnerRadius) * questionFontSize;

				var lines = question.title.split("\n");
				var linesNr = lines.length;

				lines.forEach(function (line, i) {
					_this.g.append("text").attr("class", "questionTitle").attr("dy", linesNr === 1 ? fontSize / 3 : (-linesNr / 2 + i + 0.75) * fontSize).append("textPath").attr("xlink:href", "#question_" + question.idx).text(line).attr("startOffset", startOffset + "%").style("text-anchor", "middle").style("font-size", fontSize + "px");
				});
			}
		}, {
			key: "renderLines",
			value: function renderLines() {
				var centerX = this.cfg.centerX,
				    centerY = this.cfg.centerY;
				var questionsStartRadiusPct = this.questionsStartRadiusPct,
				    questionsTitleOuterRadiusPct = this.questionsTitleOuterRadiusPct;

				var questionAxis = this.g.selectAll(".questionAxis").data(this.questions).enter().append("g").attr("class", "questionAxis");

				questionAxis.append("line").attr("x1", function (question) {
					return centerX * (1 - questionsStartRadiusPct * Math.sin(question.startAngle));
				}).attr("y1", function (question) {
					return centerY * (1 - questionsStartRadiusPct * Math.cos(question.startAngle));
				}).attr("x2", function (question) {
					return centerX * (1 - questionsTitleOuterRadiusPct * Math.sin(question.startAngle));
				}).attr("y2", function (question) {
					return centerY * (1 - questionsTitleOuterRadiusPct * Math.cos(question.startAngle));
				}).attr("class", "line").style("stroke", "black").style("stroke-width", "1px");
			}
		}]);

		return Questions;
	}();

	exports.default = Questions;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Circles = function () {
		function Circles(g, cfg) {
			_classCallCheck(this, Circles);

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

		_createClass(Circles, [{
			key: "prepare",
			value: function prepare() {
				var centerDotPct = this.cfg.centerDotPct;

				this.circles[0].height += centerDotPct;

				var radiusPct = 0;
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = this.circles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var circle = _step.value;

						radiusPct += circle.height;
						circle.radiusPct = radiusPct;
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				this.subCatTitleInnerRadiusPct = this.circles[3].radiusPct;
				this.subCatTitleOuterRadiusPct = this.circles[4].radiusPct;
				this.questionsStartRadiusPct = this.subCatTitleOuterRadiusPct;
				this.questionsTitleInnerRadiusPct = this.circles[8].radiusPct;
				this.questionsTitleOuterRadiusPct = this.circles[9].radiusPct;
			}
		}, {
			key: "renderCircles",
			value: function renderCircles(type) {
				var radius = this.cfg.radius,
				    centerX = this.cfg.centerX,
				    centerY = this.cfg.centerY;

				var circles = !type ? this.circles : this.circles.filter(function (c) {
					return c.type === type;
				});

				this.g.selectAll(".circle").data(circles).enter().append("circle").attr("cx", centerX).attr("cy", centerY).attr("r", function (c) {
					return c.radiusPct * radius;
				}).attr("fill", "none").attr("stroke", function (c) {
					return c.stroke;
				}).attr("stroke-width", function (c) {
					return c.strength;
				});
			}
		}, {
			key: "renderCenterDot",
			value: function renderCenterDot() {
				var centerX = this.cfg.centerX,
				    centerY = this.cfg.centerY,
				    centerDotPct = this.cfg.centerDotPct,
				    radius = this.cfg.radius;

				this.g.append("circle").attr("cx", centerX).attr("cy", centerY).attr("r", centerDotPct * radius).attr("fill", "black");
			}
		}, {
			key: "renderLegend",
			value: function renderLegend() {
				var legendDotPct = this.cfg.legendDotPct,
				    centerX = this.cfg.centerX,
				    centerY = this.cfg.centerY,
				    radius = this.cfg.radius;

				var legendFontSize = legendDotPct * radius * 1.3;

				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = this.circles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var circle = _step2.value;

						var posY = centerY - circle.radiusPct * radius;

						if (circle.legendValue) {
							var group = this.g.append("g").attr("transform", "translate(" + centerX + ", " + posY + ")");

							group.append("circle").attr("cx", 0).attr("cy", 0).attr("r", legendDotPct * radius);

							group.append("text").attr("fill", "white").attr("text-anchor", "middle").attr("dy", legendFontSize / 3).text(circle.legendValue).style("font-size", legendFontSize + "px");
						}
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			}
		}]);

		return Circles;
	}();

	exports.default = Circles;


	Circles.circles = [{
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

/***/ }
/******/ ]);