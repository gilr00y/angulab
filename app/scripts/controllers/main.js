'use strict';

var SVG = window.SVG;

angular.module('angulabApp')
  .controller('MainCtrl', ['$scope', 'imageService', 'elementService', function ($scope, imageService, elementService) {

    window.Design = SVG('drawing');

    $scope.images = imageService.getImages();
    elementService.addElement({ something: 'yo'}, 'test');
    $scope.elements = elementService.allElements;

    //$scope.$watch(function() { return elementService.allElements; }, function(elements) {
    //  console.log('here');
    //  $scope.elements = elements;
    //});//, true);

  }]);
