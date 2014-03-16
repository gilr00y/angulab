'use strict';

angular.module('angulabApp')
  .directive('designable', ['$compile', 'designService', 'svgElementFactory', function($compile, designService, svgElementFactory) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {

        element.on('click', function() {
          var svgEl = svgElementFactory.create(designService.design, attrs.name);
          svgEl.setSize(70, 70);
          svgEl.setAttrs({
            'draggable':''
          , 'rotatable':''
          , 'resizable':''
          });

          $compile(svgEl.getNode())(scope);
          scope.$apply(function() {
            designService.addElement({ src: attrs.name }, svgEl.getId());
          });
        });
      }
    };
  }]);
