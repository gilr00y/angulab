angular.module('angulabApp')
  .factory('svgService', function() {
    var snap;

    return {
      init: function(selector) {
        snap = Snap(selector);
      },
      //getDesignNode: function() {
      //  return snap.node;
      //},
      getSnap: function() {
        return snap;
      },
      add: function(svg) {
        snap.append(svg);
      }
    }
  });