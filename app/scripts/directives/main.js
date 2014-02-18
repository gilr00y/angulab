'use strict';

angular.module('angulabApp')
  .directive('superman', function() {
    return {
      restrict: 'A',
      link: function(arg1, arg2, arg3) {
        console.log('1: ' + arg1);
        console.log('2: ' + arg2);
        console.log('3: ' + arg3);
      }
    };
  });