'use strict';

angular.module('angulabApp')
  .factory('handleService', [function() {
    var handles = [];

    return {
      register: function(handle) {
        handles.push(handle);
      },

      removeAll: function() {
        for(var i=0; i<handles.length; i++) {
          handles[i].remove();
        }
        handles = [];
      }
    };
  }]);
