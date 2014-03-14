'use strict';

angular.module('angulabApp')
  .controller('LabController', ['$scope', 'imageService', 'designService', 'manipulatorService', function ($scope, imageService, designService, manipulatorService) {

    designService.design = manipulatorService.wrapInSVG('drawing');

    $scope.images = imageService.getImages();
    $scope.elements = designService.allElements();

  }]);
