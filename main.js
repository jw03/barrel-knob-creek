(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function test(){
  console.log('Test')
}

module.exports = test;

},{}],2:[function(require,module,exports){
var component = require('../components/test.js');

/**
 * Finds all elements with a "data-module-init" attribute
 * and calls the corresponding script
 */
function init() {
  console.log('working')
}

module.exports = init;

},{"../components/test.js":1}],3:[function(require,module,exports){
var init = require('./lib/init.js');

document.addEventListener('DOMContentLoaded', function(){
  init();
});

},{"./lib/init.js":2}]},{},[3]);