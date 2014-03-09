'use strict';

angular.module('angulabApp')
  .controller('MainCtrl', ['$scope', 'imageService', 'designService', 'svgService', function ($scope, imageService, designService, svgService) {

    designService.design = svgService.wrapInSVG('drawing');

    $scope.images = imageService.getImages();
    $scope.elements = designService.allElements();

  }]);
