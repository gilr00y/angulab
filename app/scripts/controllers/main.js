'use strict';

var SVG = window.SVG;

angular.module('angulabApp')
  .controller('MainCtrl', ['$scope', 'imageService', function ($scope, imageService) {

    window.Design = SVG('drawing');

    $scope.images = imageService.getImages();
  }])
  .controller('DashboardCtrl', ['$scope', 'elementService', function($scope, elementService) {

    $scope.elements = elementService.elements();
    $scope.$on('elementsUpdated', function() {
      $scope.elements = elementService.elements();
      $scope.$apply();
    });

  }]);