'use strict';

angular.module('angulabAppMock').
  factory('manipulatorServiceMock', function() {
    return {
      resizable: function() {},
      rotatable: function() {},
      draggable: function() {},
      wrapInSVG: function() {}
    };
  });
