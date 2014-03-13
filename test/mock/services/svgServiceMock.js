'use strict';

angular.module('angulabAppMock').
  factory('svgServiceMock', function() {
    return {
      resizable: function() {},
      rotatable: function() {},
      draggable: function() {},
      wrapInSVG: function() {}
    };
  });
