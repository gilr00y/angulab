'use strict';

//var SVG = window.SVG;

angular.module('angulabApp')
  .directive('designable', ['$compile', 'svgService', function($compile, svgService) {
    return {
      restrict: 'A',
      scope: {
        name: '='
      },
      link: function(scope, element, attrs) {

        var el;
        element.on('click', function() {
          //var designElement = angular.element(element[0].innerHTML);
          //designElement.attr('draggable', true);

          Snap.load(scope.name, function(file) {
            var ghost = svgService.getSnap().group(file.selectAll('svg > path'));
            ghost.attr({ editable: true });
            el = $compile(ghost.node)(scope);
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
  .directive('editable', ['$compile', function($compile) {
    return {
      restrict: 'A',
      link: {
        pre: function(scope, element) {
        },
        post: function(scope, element, attr) {
          element.on('click', function() {
            // toggle resizable attr on click
            if(!attr.resizable) {
              var newEl = element.clone();
              newEl.attr({ resizable: true });
              newEl = $compile(newEl)(scope);
              element.replaceWith(newEl);
            }
            else {
              var newEl = element.clone();
              newEl.removeAttr('resizable');
              newEl = $compile(newEl)(scope);
              element.replaceWith(newEl);
            }
          });
        }
      }

    };
  }])
  .directive('resizable', function() {
    return {
      retstrict: 'A',
      link: function(scope, element, attr) {
        element.on('click', function() {
          console.log(Snap(element[0]));
        });
      }
    }
  });
