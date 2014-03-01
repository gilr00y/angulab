'use strict';

angular.module('angulabApp')
  .controller('MainCtrl', ['$scope', 'imageService', 'elementService', 'svgService', function ($scope, imageService, elementService, svgService) {

    window.Design = svgService.wrapInSVG('drawing');

    $scope.images = imageService.getImages();
    $scope.elements = elementService.allElements();

    //$scope.$watch(function() { return elementService.allElements; }, function(elements) {
    //  console.log('here');
    //  $scope.elements = elements;
    //});//, true);

  }]);
