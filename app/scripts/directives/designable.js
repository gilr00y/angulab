'use strict';

angular.module('angulabApp')
  .directive('designable', ['$compile', 'elementService', function($compile, elementService) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {

        element.on('click', function() {
          var group = window.Design.group();
          var image = group.image(attrs.name);
          image.size(70,70);
          image.attr({
            'draggable':''
          , 'rotatable':''
          , 'resizable':''
          });

          $compile(image.node)(scope);
          scope.$apply(function() {
            elementService.addElement({ src: attrs.name }, group.node.id);
          });
        });
      }
    };
  }]);
