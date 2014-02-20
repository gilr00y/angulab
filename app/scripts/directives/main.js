'use strict';

angular.module('angulabApp')
  .directive('designable', ['$compile', 'svgService', function($compile, svgService) {
    return {
      restrict: 'A',
      scope: {
        name: '='
      },
      link: function(scope, element) {

        element.on('click', function() {
          //var group = window.Design.group();
          //var image = group.image(scope.name);
          var image = svgService.loadElement(scope.name);
          image.attr({
            'draggable':'',
            'rotatable':'',
            'resizable':''
          });

          $compile(image.node)(scope);
        });
      }
    };
  }])
  .directive('draggable', ['svgService', function(svgService) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        var svgEl = svgService.getElementById(element[0].id),
          imageGroup = svgEl.parent;

          svgService.addDrag(imageGroup);
      }
    };
  }])
  .directive('rotatable', ['svgService', function(svgService) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        var svgEl = svgService.getElementById(element[0].id),
          imageGroup = svgEl.parent,
          rotateHandle;

        imageGroup
          .on('mouseenter', function() {
            rotateHandle = svgService.drawRect(imageGroup, 12, 12);
            rotateHandle
              .on('mousedown', function() {
                console.log('handle clicked, turning off drag');
                svgService.removeDrag(imageGroup);
              })
              .on('mouseup', function() {
                console.log('handle lifted, turning on drag');
                svgService.addDrag(imageGroup);
              });
          })
          .on('mouseleave', function() {
            svgService.removeElement(rotateHandle);
          });
      }
    };
  }])
  .directive('resizable', ['svgService', function(svgService) {
    return {
      restrict: 'A',
      link: {
        post: function(scope, element) {
          var svgEl = svgService.getElementById(element[0].id),
            imageGroup = svgEl.parent,
            resizeHandle;

          imageGroup
            .on('mouseenter', function() {
              resizeHandle = svgService.drawRect(imageGroup, 12, 12);
              resizeHandle
                .on('mousedown', function() {
                  console.log('resize handle clicked, turning off drag');
                  svgService.removeDrag(imageGroup);
                })
                .on('mouseup', function() {
                  console.log('resize handle lifted, turning on drag');
                  svgService.addDrag(imageGroup);
                });
            })
            .on('mouseleave', function() {
              svgService.removeElement(resizeHandle);

            });
        }
      }
    };
  }]);




