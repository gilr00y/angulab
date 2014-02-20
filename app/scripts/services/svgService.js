angular.module('angulabApp')
  .factory('svgService', function() {
    var SVG = window.SVG;
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
      }
    }
  });
