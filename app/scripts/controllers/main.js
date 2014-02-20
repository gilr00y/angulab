'use strict';

angular.module('angulabApp')
  .controller('MainCtrl', ['$scope', 'imageService', 'svgService', function ($scope, imageService, svgService) {

    svgService.init('drawing');

    $scope.images = imageService.getImages();
  }]);
