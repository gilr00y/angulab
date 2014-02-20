'use strict';

var SVG = window.SVG;

angular.module('angulabApp')
  .directive('designable', ['$compile', function($compile) {
    return {
      restrict: 'A',
      scope: { name: '=' },
      link: function(scope, element) {

        element.on('click', function() {
          // var designElement = angular.element(element[0].innerHTML);
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
  .directive('draggable', function() {
    return {
      restrict: 'A',
      link: {
        post: function(scope, element) {
          var svgEl = SVG.get(element[0].id)
            , imageGroup = svgEl.parent;

          imageGroup.draggable();
        }
      }
    };
  })
  .directive('rotatable', function() {
    return {
      restrict: 'A',
      link: {
        post: function(scope, element) {
          var svgEl = SVG.get(element[0].id)
            , imageGroup = svgEl.parent
            , rotateHandle;

          // console.log(svgEl.center());

          imageGroup
            .on('mouseenter', function() {
              rotateHandle = imageGroup.rect(12,12);
              rotateHandle
                .on('mousedown', function() {
                  console.log('handle clicked, turning off drag');
                  imageGroup.fixed();
                })
                .on('mouseup', function() {
                  console.log('handle lifted, turning on drag');
                  imageGroup.draggable();
                });
            })
            .on('mouseleave', function() {
              rotateHandle.remove();

            })
        }
      }
    };
  })
  .directive('resizable', function() {
    return {
      restrict: 'A',
      link: {
        post: function(scope, element) {
          var svgEl = SVG.get(element[0].id)
            , imageGroup = svgEl.parent
            , resizeHandle;
          imageGroup
            .on('mouseenter', function() {
              resizeHandle = imageGroup.rect(12,12);
              resizeHandle
                .on('mousedown', function() {
                  console.log('resize handle clicked, turning off drag');
                })
                .on('mouseup', function() {
                  console.log('resize handle lifted, turning on drag');
                  imageGroup.draggable();
                });
            })
            .on('mouseleave', function() {
              resizeHandle.remove();

            })
        }
      }
    };
  });




