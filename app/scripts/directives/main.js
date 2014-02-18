'use strict';

var SVG = window.SVG;

// these should be moved into a service
function wrapSVG(element) {
  return SVG(element);
}

function moveSVG() {
  var element = wrapSVG(this);
  element.dmove(20, 20);
}

function serializeSVG(svg) {
  return new XMLSerializer().serializeToString(svg);
}

angular.module('angulabApp')
  .directive('designable', ['$compile', function($compile) {
    return {
      restrict: 'A',
      scope: { name: '=' },
      link: function(scope, element) {
        // new DesignElement(element);

        element.on('click', function() {
          var designElement = angular.element(element[0].innerHTML);
          designElement.attr('clicked', true);

          angular.element(window.Design.node).prepend($compile(designElement)(scope));
          designElement.on('click', moveSVG);
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
