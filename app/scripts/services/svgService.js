'use strict';

var SVG = window.SVG;

angular.module('angulabApp')
  .factory('svgService', ['$rootScope', 'designService', 'handleService', function($rootScope, designService, handleService) {
    function disableDrag(el) {
      el.fixed();
    };

    function enableDrag(el) {
      el.draggable();
    };

    function radianToDegree(radians) {
      return radians * 360 / (2 * Math.PI);
    };

    return {
      resizable: function(element) {
        var svgEl = SVG.get(element[0].id)
        , imageGroup = svgEl.parent
        , resizeHandle
        , handleSize = { width: 12, height: 12}
        , resizing = false;

        imageGroup.on('mouseenter', function() {
          if(!resizing) {
            var imageHeight = svgEl.height();
            var imageWidth = svgEl.width();
            if (!resizeHandle) {};
            resizeHandle = imageGroup.image('images/resize.png').size(20,20).move(imageWidth - handleSize.width, imageHeight - handleSize.height);
            handleService.register(resizeHandle);

            resizeHandle.on('mousedown', function(event) {
              resizeStart(event.x, event.y);
            });
          };
        })
        .on('mouseleave', function() {
          if(!resizing) {
            handleService.removeAll();
          };
        });

        function resizeStart(startX, startY) {
          resizing = true;
          disableDrag(imageGroup);

          var imageSize = svgEl.width();

          designService.design.on('mousemove', function(event) {
            if(resizing) {
              var newSize = event.x - startX;
              svgEl.size(imageSize + newSize, imageSize + newSize);
              resizeHandle.move(imageSize + newSize - handleSize.width, imageSize + newSize - handleSize.height);
            };
          });

          designService.design.on('mouseup', resizeEnd);
        };

        function resizeEnd() {
          resizing = false;
          enableDrag(imageGroup);
          handleService.removeAll();

          // set width and height on resize
          $rootScope.$apply(function() {
            designService.setAttr(imageGroup.attr('id'), 'height', element.attr('height'));
            designService.setAttr(imageGroup.attr('id'), 'width', element.attr('width'));
          });
        };
      },
      rotatable: function(element) {
        var svgEl = SVG.get(element[0].id)
            , imageGroup = svgEl.parent
            , rotateHandle
            , initialRotateAngle
            , rotating = false; //are we currently rotating the element?

        function startRotate(event) {
          initialRotateAngle = svgEl.transform('rotation')
          // assumes click event happens in top left corner of image
          // should be changed for greater precision
          var centerX = event.x + svgEl.cx()
            , centerY = event.y + svgEl.cy();
          rotating = true;

          disableDrag(imageGroup);

          designService.design.on('mousemove', function(event) {
            var dX, dY, newAngle;
            if(rotating) {
              dX = event.x - centerX;
              dY = centerY - event.y;

              if(dY < 0 && dX >= 0) {
                newAngle = initialRotateAngle - radianToDegree(Math.atan(dY/dX)) + 135;
              } else if(dY < 0 && dX < 0) {
                newAngle = initialRotateAngle - radianToDegree(Math.atan(dY/dX)) + 315;
              } else {
                newAngle = initialRotateAngle + radianToDegree(Math.atan(dX/dY)) + 45;
              };

              svgEl.rotate(newAngle);//rotateHandle sits at 45*
            };
          });

          designService.design.on('mouseup', endRotate);
        };

        function endRotate() {
          rotating = false;
          enableDrag(imageGroup);
          handleService.removeAll();
          // set angle
          $rootScope.$apply(function() {
            designService.setAttr(imageGroup.attr('id'), 'angle', svgEl.transform('rotation'));
          });
        };

        imageGroup.on('mouseenter', function() {
          // if(!rotateHandle) {
            rotateHandle = imageGroup.image('images/rotate.png').size(25,25);
            handleService.register(rotateHandle);
            rotateHandle.on('mousedown', startRotate);
          // };
        });

        imageGroup.on('mouseleave', function() {
          if(!rotating) {
            handleService.removeAll();
          }
        });
      },
      draggable: function(element) {
        var imageGroup = SVG.get(element[0].id).parent;
        imageGroup.draggable({
          minX: 10,
          minY: 10,
          maxX: 590,
          maxY: 590
        });
        imageGroup.dragmove = function(delta, event) {
          // set x and y coordinates after drag
          $rootScope.$apply(function() {
            designService.setAttr(imageGroup.attr('id'), 'x', event.x);
            designService.setAttr(imageGroup.attr('id'), 'y', event.y);
          });
        };
      },
      wrapInSVG: function(elementId) {
        return SVG(elementId);
      }
    }
  }]);
