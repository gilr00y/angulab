angular.module('angulabApp')
  .service('designService', Design);

function Design() {
  this.design;
  this.elements = {};
}

Design.prototype.addElement = function(element, id) {
  this.elements[id] = element;
};

Design.prototype.allElements = function() {
  return this.elements;
};

Design.prototype.setAttr = function(id, attr, value) {
  if(typeof this.elements[id] !== 'undefined') {
    this.elements[id][attr] = value;
  }
  else {
    throw new Error('Element with id: ' + id + ' does not exist');
  }
};

Design.prototype.getAttr = function(id, attr) {
  if(typeof this.elements[id] !== 'undefined') {
    return this.elements[id][attr];
  }
  else {
    throw new Error('Element with id: ' + id + ' does not exist');
  }
};

Design.prototype.getElement = function(id) {
  return this.elements[id];
};