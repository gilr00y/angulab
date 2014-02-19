'use strict';

//var SVG = window.SVG;

angular.module('angulabApp')
  .directive('designable', ['$compile', 'svgService', function($compile, svgService) {
    return {
      restrict: 'A',
      scope: { name: '=' },
      link: function(scope, element, attrs) {

        element.on('click', function() {
          var designElement = angular.element(element[0].innerHTML);
          designElement.attr('draggable', true);

          Snap.load(scope.name, function(file) {
            var ghost = svgService.getSnap().group(file.selectAll('svg > path'));
            //ghost.attr({
            svgService.add(ghost);
            ghost.drag()
            //file.node.setAttribute('id', 'tempId');
            //svgService.add(file);
            //var el = Snap.select('#tempId');
            //el.attr({ id: '', dragabble: true });
            //el.drag();
          });

          //angular.element(svgService.getDesignNode()).append($compile(designElement)(scope));
        });
      }
    };
  }])
  .directive('draggable', function() {
    return {
      restrict: 'A',
      link: {
        pre: function(scope, element) {
          //something here
        },
        post: function(scope, element) {
          var draggableElement = element[0];
          element.on('click', function() { alert('test') });
          //draggableElement.drag(move, start, stop);
         // SVG(draggableElement).draggable();
        }
      }

    };
  });
