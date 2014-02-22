angular.module('angulabApp')
  .factory('svgService', function() {
    var SVG = window.SVG;
    var math = window.SVG.math;
    var Canvas;

    return {
      init: function(elementId) {
        Canvas = SVG(elementId);
      },
      loadElement: function(file) {
        var group = Canvas.group();
        return group.image(file);
      },
      getElementById: function(elementId) {
        return SVG.get(elementId);
      },
      removeElement: function(element) {
        element.remove();
      },
      addDrag: function(element) {
        element.draggable();
      },
      removeDrag: function(element) {
        element.fixed();
      },
      drawRect: function(element, width, height) {
        return element.rect(width, height);
      },
      createPoint: function(x, y) {
        return new math.Point(x, y);
      },
      // midpoint is optional
      angleBetween: function(point1, point2, midpoint) {
        return math.angle(point1, point2, midpoint);
      },
      getCenterX: function(element) {
        return element.cx();
      },
      getCenterY: function(element) {
        return element.cy();
      },
      transform: function(element, transformation, params) {
        // only works for rotate right now
        var currTransform = element.attr('transform') || (transformation + '()');
        var newTransform = transformation + '(' + params + ')';
        element.attr('transform', newTransform + ',' +  currTransform);
        return element;
      },
      //rotate: function(element, angle) {
      //  var currAngle = parseInt((element.attr('transform') || '0 ').match(/(\d+) /)[1], 10);
      //  element.rotate(currAngle + angle);
      //  return element
      //}
    }
  });
