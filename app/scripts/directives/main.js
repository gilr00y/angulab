'use strict';

var SVG = window.SVG;

angular.module('angulabApp')
  .directive('designable', ['$compile', 'elementService', function($compile, elementService) {
    return {
      scope: { name: '=' },
      link: function(scope, element) {

        element.on('click', function() {
          var group = window.Design.group();
          var image = group.image(scope.name);
          image.attr({
            'draggable':''
          , 'rotatable':''
          , 'resizable':''
          });

          elementService.addElement(image);

          $compile(image.node)(scope);
        });
      }
    };
  }])
  .directive('draggable', ['svgService', function(svgService) {
    return function(scope, element) {
      svgService.draggable(element);
    };
  }])
  .directive('resizable', ['svgService', function(svgService) {
    return function(scope, element) {
      svgService.resizable(element);
    };
  }])
  .directive('rotatable', ['svgService', function(svgService) {
    return function(scope, element) {
      svgService.rotatable(element);
    };
  }]);
