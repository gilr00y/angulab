'use strict';

var angulabApp = {};
angulabApp.mock = {};

// mock imageService
angulabApp.mock.$imageServiceMockProvider = function() {
  this.$get = function() {
    var $service = {
      getImages: function() {
        return [ { src: 'something.svg' } ];
      }
    };
    return $service;
  };
};

// mock designService
angulabApp.mock.$designServiceMockProvider = function() {
  var design;
  var elements = { 'testSVG': { height: 10, width: 20 } };
  this.$get = function() {
    var $service = {
      addElement: function() {},
      allElements: function() {
        return elements;
      },
      setAttr: function(id, attr, value) {},
      getAttr: function(id, attr) {},
      getElement: function(id) {},
      design: design
    };
    return $service;
  };
};

// mock svgService
angulabApp.mock.$svgServiceMockProvider = function() {
  this.$get = function() {
    var $service = {
      resizable: function() {},
      rotatable: function() {},
      draggable: function() {},
      wrapInSVG: function() {}
    };
    return $service;
  };
};

angular.module('angulabAppMock', ['ng']).provider({
  $imageServiceMock: angulabApp.mock.$imageServiceMockProvider,
  $svgServiceMock: angulabApp.mock.$svgServiceMockProvider,
  $designServiceMock: angulabApp.mock.$designServiceMockProvider
});
