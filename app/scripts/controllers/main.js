'use strict';

angular.module('angulabApp')
  .controller('MainCtrl', ['$scope', 'imageService', 'svgService', function ($scope, imageService, svgService) {

    // move this init to directly off the angular module (run or config or somethign)
    svgService.init('#drawing');
    $scope.images = imageService.getImages();
  }]);
