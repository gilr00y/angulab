'use strict';

angular.module('angulabApp')
  .directive('designable', ['$compile', 'designService', function($compile, designService) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {

        element.on('click', function() {
          var group = designService.design.group();
          var image = group.image(attrs.name);
          image.size(70,70);
          image.attr({
            'draggable':''
          , 'rotatable':''
          , 'resizable':''
          });

          $compile(image.node)(scope);
          scope.$apply(function() {
            designService.addElement({ src: attrs.name }, group.node.id);
          });
        });
      }
    };
  }]);
