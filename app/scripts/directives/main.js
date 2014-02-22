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
          rotateHandle,
          rotateHandleSize = 12,
          point1 = svgService.createPoint(15,16),
          point2;

        imageGroup
          .on('mouseenter', function() {
            rotateHandle = svgService.drawRect(imageGroup, rotateHandleSize, rotateHandleSize)
                             .dmove(svgEl.width() - rotateHandleSize, svgEl.height() - rotateHandleSize)
                             .fill('red');
            //rotateHandle.draggable();
            rotateHandle
              .on('mousedown', function(e) {
                console.log('rotate handle clicked, turning off drag');
                svgService.removeDrag(imageGroup);
                //point1 = svgService.createPoint(e.x, e.y);
              })
              .on('mouseup', function(e) {
                console.log('rotate handle lifted, turning on drag');
                svgService.addDrag(imageGroup);
                //point2 = svgService.createPoint(e.x, e.y);
                //var angle = svgService.angleBetween(point1, point2, midpoint);
                //svgService.transform(imageGroup, 'rotate', angle);
              });
          })
          .on('mousemove', function(e) {
            point2 = svgService.createPoint(e.x, e.y);
            var angle = svgService.angleBetween(point1, point2);
            console.log(angle);
            svgService.transform(imageGroup, 'rotate', angle);
            point1 = point2;
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




