'use strict';

angular.module('angulabApp')
  .factory('handleService', [function() {
    var elements = [];

    return {
      register: function(element) {
        elements.push(element);
      },

      removeAll: function() {
        for(var i=0; i<elements.length; i++) {
          elements[i].remove();
        }
        //TODO: clear elements array?
        // this seems to introduce a bug
        // but huge array growth is not ideal for each hover..
        //elements = [];
      }
    };
  }]);
