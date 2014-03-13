'use strict';

angular.module('angulabAppMock').
  service('designServiceMock', DesignMock);

function DesignMock() {
  this.design;
  this.elements = { 'testSVG': {height: 10, width:20} };
}

DesignMock.prototype.addElement = function(element, id) {
  this.elements[id] = element;
};

DesignMock.prototype.allElements = function() {
  return this.elements;
};

DesignMock.prototype.setAttr = function(id, attr, value) {
  if(typeof this.elements[id] !== 'undefined') {
    this.elements[id][attr] = value;
  }
  else {
    throw new Error('Element with id: ' + id + ' does not exist');
  }
};

DesignMock.prototype.getAttr = function(id, attr) {
  if(typeof this.elements[id] !== 'undefined') {
    return this.elements[id][attr];
  }
  else {
    throw new Error('Element with id: ' + id + ' does not exist');
  }
};

DesignMock.prototype.getElement = function(id) {
  return this.elements[id];
};
