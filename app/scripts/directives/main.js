'use strict';

var SVG = window.SVG;

angular.module('angulabApp')
  .directive('designable', ['$compile', function($compile) {
    return {
      restrict: 'A',
      scope: { name: '=' },
      link: function(scope, element) {

        element.on('click', function() {
          var designElement = angular.element(element[0].innerHTML);
          designElement.attr('draggable', true);

          angular.element(window.Design.node).prepend($compile(designElement)(scope));
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
          SVG(element[0]).draggable();
        }
      }

    };
  });
