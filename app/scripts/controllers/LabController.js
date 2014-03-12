'use strict';

angular.module('angulabApp')
  .controller('LabController', ['$scope', 'imageService', 'designService', 'svgService', function ($scope, imageService, designService, svgService) {

    designService.design = svgService.wrapInSVG('drawing');

    $scope.images = imageService.getImages();
    $scope.elements = designService.allElements();

  }]);
