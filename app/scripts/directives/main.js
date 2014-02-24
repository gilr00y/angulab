'use strict';

var SVG = window.SVG;

angular.module('angulabApp')
  .directive('designable', ['$compile', function($compile) {
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
        });
      }
    };
  }])
  .directive('draggable', ['svgService', function(svgService) {
    return {
      restrict: 'A',
      link: {
        post: function(scope, element) {
          svgService.draggable(element);
        }
      }
    };
  }])
  .directive('resizable', ['svgService', function(svgService) {
    return {
      restrict: 'A',
      link: {
        post: function(scope, element) {
          svgService.resizable(element);
        }
      }
    };
  }])
  .directive('rotatable', ['svgService', function(svgService) {
    return {
      restrict: 'A',
      link: {
        post: function(scope, element) {
          svgService.rotatable(element);
        }
      }
    };
  }]);
