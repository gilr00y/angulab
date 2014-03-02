angular.module('angulabApp')
  .factory('elementService', function() {
    var elements = {};
    return {
      addElement: function(element, id) {
        elements[id] = element;
      },
      allElements: function() {
        return elements;
      },
      setAttr: function(id, attr, value) {
        if(typeof elements[id] !== 'undefined') {
          elements[id][attr] = value;
        }
        else {
          throw new Error('Element with id: ' + id + ' does not exist');
        }
      },
      getAttr: function(id, attr) {
        if(typeof elements[id] !== 'undefined') {
          return elements[id][attr];
        }
        else {
          throw new Error('Element with id: ' + id + ' does not exist');
        }
      },
      getElement: function(id) {
        return elements[id];
      }
    }
  });
