'use strict';

var SVG = window.SVG;

angular.module('angulabApp')
  .directive('designable', ['$compile', function($compile) {
    return {
      restrict: 'A',
      link: function(scope, element) {

        element.on('click', function() {
          var designElement = angular.element(element[0].innerHTML);
          designElement.attr('clicked', true);

          angular.element(window.Design.node).prepend($compile(designElement)(scope));
          designElement.on('click', function() { SVG(this).draggable(); });
        });
      }
    };
  }])
  .directive('clicker', function() {
    return {
      restrict: 'A',
      link: function(scope, element) {
        element.on('click', function() { console.log('SECONDARY CLICKED'); });
      }
    };
  });