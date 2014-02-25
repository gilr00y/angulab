angular.module('angulabApp')
  .factory('elementService', ['$rootScope', function($rootScope) {
    var elements = [];
    var counter = 0;

    function parseElementRotation(element) {
      return element.transform('rotation');
    };

    return {
      addElement: function(element) {
        var rotationAngle = parseElementRotation(element);
        elements.push({id: element.node.id, rotation: rotationAngle});
        $rootScope.$broadcast('elementsUpdated');
        counter++;
      },

      elements: function() {
        return elements;
      }
    }
  }]);