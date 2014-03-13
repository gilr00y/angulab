'use strict';

angular.module('angulabAppMock').
  factory('imageServiceMock', function() {
    return {
      getImages: function() {
        return [{src: 'something.svg'}];
      }
    };
  });
