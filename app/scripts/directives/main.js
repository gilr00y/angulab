'use strict';

var SVG = window.SVG;

angular.module('angulabApp')
  .directive('designable', ['$compile', 'elementService', function($compile, elementService) {
    return {
      restrict: 'A',
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

          $compile(image.node)(scope);
          scope.$apply(function() {
            elementService.addElement({ src: scope.name }, group.node.id);
          });
        });
      }
    };
  }])
  .directive('draggable', ['svgService', function(svgService) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        svgService.draggable(element);
      }
    };
  }])
  .directive('resizable', ['svgService', function(svgService) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        svgService.resizable(element);
      }
    };
  }])
  .directive('rotatable', ['svgService', function(svgService) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        svgService.rotatable(element);
      }
    };
  }]);
