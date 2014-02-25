angular.module('angulabApp')
  .factory('elementService', function() {
    var elements = {};

    return {
      addElement: function(element, id) {
        elements[id] = element;
      },
      allElements: elements,
      setAttr: function(id, attr, value) {
        elements[id][attr] = value;
      },
      getAttr: function(id, attr) {
        return elements[id][attr];
      },
      getElement: function(id) {
        return elements[id];
      }
    }
  });
