'use strict';

var SVG = window.SVG;

angular.module('angulabApp').service('svgElementFactory', SVGElementFactory);

//SVGElement.$inject = ['designService'];

function SVGElementFactory() {
}

// get existing svg element
SVGElementFactory.prototype.get = function(id) {
  var element = SVG.get(id);
  var group = element.parent;
  return new SVGElement(element, group);
};

// create new svg element
SVGElementFactory.prototype.create = function(design, src) {
  var group = design.group();
  var element = group.image(src);
  return new SVGElement(element, group);
};


function SVGElement(el, grp) {
  this.element = el;
  this.group = grp;
}

SVGElement.prototype.getHeight = function() {
  return this.element.height();
};

SVGElement.prototype.getWidth = function() {
  return this.element.width();
};

SVGElement.prototype.setSize = function(width, height) {
  this.element.size(width, height);
};

SVGElement.prototype.enableDrag = function(opts) {
  this.group.draggable(opts);
};

SVGElement.prototype.disableDrag = function() {
  this.group.fixed();
};

SVGElement.prototype.getAngle = function() {
  return this.element.transform('rotation');
};

SVGElement.prototype.getCenterX = function() {
  return this.element.cx();
};

SVGElement.prototype.getCenterY = function() {
  return this.element.cy();
};

SVGElement.prototype.rotate = function(angle) {
  this.element.rotate(angle);
};