/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* root component starts here */
__webpack_require__(1); // include general styles

__webpack_require__(3); // include router

/* example of including header component */
__webpack_require__(4);
__webpack_require__(7);
__webpack_require__(9);
__webpack_require__(8);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5); // example of including component's styles

window.onscroll = function() {
    var header = document.querySelector(".header");
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        header.classList.add("header--sticky");
    } else {
        header.classList.remove("header--sticky");
    }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var initVoter = __webpack_require__(8).voter;
var CycleComponent = __webpack_require__(9).cycle;

var model = [
    {
        elem: document.querySelector('.settings__item--time'),
        step: 5,
        max: 25,
        min: 15
    },
    {
        elem: document.querySelector('.settings__item--iteration'),
        step: 1,
        max: 5,
        min: 2
    },
    {
        elem: document.querySelector('.settings__item--short-break'),
        step: 1,
        max: 5,
        min: 3
    }, {
        elem: document.querySelector('.settings__item--long-break'),
        step: 5,
        max: 30,
        min: 15
    }
];

var controller = new Controller();
controller.init(model);
controller.redraw();


function Controller() {

    this.redraw = function () {
        if (document.querySelector(".settings")) { //temporary code to prevent js from executing on another pages
            var cycleContainer = document.querySelector(".cycle__container");
            var inputs = {
                workTime: +((document.querySelector(".settings__item--time .settings__input")).value),
                workIterations: +(document.querySelector(".settings__item--iteration .settings__input")).value,
                shortBreak: +(document.querySelector(".settings__item--short-break .settings__input")).value,
                longBreak: +(document.querySelector(".settings__item--long-break .settings__input")).value
            };
            new CycleComponent(cycleContainer, inputs);
        }
    };

    this.init = function (data) {
        if (document.querySelector(".settings")) { //temporary code to prevent js from executing on another pages
            data.forEach(function (elem) {
                initVoter(elem);
            });
        }
    }
}

exports.redraw = controller.redraw;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var redraw = __webpack_require__(7);

function Voter(obj) {

    var elem = obj.elem;
    var step = obj.step;
    var min = obj.min;
    var max = obj.max;
    var voteInput = elem.querySelector('.settings__input');
    var minusButton = elem.querySelector('.settings__button--decrease');
    var plusButton = elem.querySelector('.settings__button--increase');
    var disableClass = 'settings__button--disabled';

    elem.onclick = function (event) {
        var targetButton = event.target;

        updateButtons();

        if (isDisabled(targetButton)) {
            return;
        } else if (isIncrease(targetButton)) {
            voteIncrease();
        } else if (isDecrease(targetButton)) {
            voteDecrease();
        }
        redraw.redraw();
    }

    function isDisabled(targetButton) {
        return targetButton.classList.contains(disableClass);
    }

    function isIncrease(targetButton) {
        return targetButton.className === "settings__button settings__button--increase" || targetButton.className === "icon-add";
    }

    function isDecrease(targetButton) {
        return targetButton.className === "settings__button settings__button--decrease" || targetButton.className === "icon-minus";
    }

    function voteDecrease() {
        var newValue = getCurrentValue() - step;
        onNewValue(newValue);
    }

    function voteIncrease() {
        var newValue = getCurrentValue() + step;
        onNewValue(newValue);
    }

    function getCurrentValue() {
        return +voteInput.value;
    }

    function onNewValue(newValue) {
        if (inRange(newValue)) {
            voteInput.value = newValue;
            updateButtons();
        }
    }

    function inRange(value) {
        return value >= min && value <= max;
    }

    function updateButtons() {
        var value = getCurrentValue();
        disableButton(minusButton, value === min);
        disableButton(plusButton, value === max);
    }

    function disableButton(targetButton, disable) {
        if (isDisabled(targetButton) === disable) {
            return;
        }

        if (disable) {
            targetButton.classList.add(disableClass);
        } else {
            targetButton.classList.remove(disableClass);
        }
    }
}

exports.voter = Voter;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

function CycleComponent(cycleContainer, inputs) {
    var cycle = cycleContainer;
    var workTime = inputs.workTime;
    var workIterations = inputs.workIterations;
    var shortBreak = inputs.shortBreak;
    var longBreak = inputs.longBreak;
    var step = 30;
    var fullTime = (workTime * workIterations + shortBreak * (workIterations - 1)) * 2 + longBreak;
    var firstCycleTime = workTime * workIterations + shortBreak * (workIterations - 1) + longBreak;
    var fragment = document.createDocumentFragment();

    clear(cycle);
    fragment.appendChild(createMinutesScale());
    fragment.appendChild(drawCycleLine());
    fragment.appendChild(createHoursScale(step));
    cycle.appendChild(fragment);

    function drawCycleLine() {
        var cycleLine = createItem("div", "", "cycle__line");
        createCycle(cycleLine);
        createIteration(cycleLine, longBreak, "cycle__iteration--long-break");
        createCycle(cycleLine);
        return cycleLine;
    }

    function createCycle(cycleLine) {
        for (var i = 0; i < workIterations - 1; i++) {
            createIteration(cycleLine, workTime, "cycle__iteration--time");
            createIteration(cycleLine, shortBreak, "cycle__iteration--short-break");
        }
        createIteration(cycleLine, workTime, "cycle__iteration--time");
    }

    function createIteration(cycleLine, time, type) {
        var iteration = createItem("span", "", "cycle__iteration", type);
        var width = (time * 100) / fullTime;
        iteration.style.width = width + '%';
        cycleLine.appendChild(iteration);
    }

    function createMinutesScale() {
        var scale = createItem("div", "", "cycle__list", "cycle__list--top");
        var fullTimeString = getTime(fullTime);
        var firstCycleTimeString = getTime(firstCycleTime);
        var firstCycleString = "First cycle: " + firstCycleTimeString;
        var firstCycleLabel = createItem ("li", firstCycleString, "cycle__label", "cycle__label--first-cycle");
        firstCycleLabel.style.left = setPos(firstCycleTime) + "%";

        scale.appendChild(createItem ("li", "0m", "cycle__label"));
        scale.appendChild(firstCycleLabel);
        scale.appendChild(createItem ("li", fullTimeString, "cycle__label", "cycle__label--right"));

        return scale;
    }

    function createHoursScale(step) {
        var scale = createItem("div", "", "cycle__list", "cycle__list--bottom");

        for (var i = 0; i <= fullTime; i+=step) {
            var value = getTime(i);
            var item;
            if (i === fullTime) {
                item = createItem("li", value, "cycle__label", "cycle__label--centered", "cycle__label--right", "cycle__label--end");
            }
            else {
                item = createItem("li", value, "cycle__label", "cycle__label--centered");
            }
            item.style.left = setPos(i) + "%";
            scale.appendChild(item);
        }
        return scale;
    }

    function createItem() {
        var item = document.createElement(arguments[0]);
        var textContent = arguments[1];
        var textNode = document.createTextNode(textContent);
        item.appendChild(textNode);

        var args =  Array.prototype.slice.apply(arguments);
        var classes = args.slice(2);
        classes.forEach(function (el) {
            item.classList.add(el);
        });

        return item;
    }

    function clear(el) {
        while (el.children.length) {
            el.removeChild(el.lastChild);
        }
    }

    function setPos(time) {
        return (time * 100) / fullTime;
    }

    function getTime(time) {
        var value;
        var hours = Math.floor(time / 60);
        var minutes = time % 60;
        if (time < 60) {
            value = time + "m";
        } else if (time % 60 === 0) {
            value = hours + "h ";
        } else {
            value = hours + "h " + minutes + "m";
        }
        return value;
    }
}

exports.cycle = CycleComponent;

/***/ })
/******/ ]);