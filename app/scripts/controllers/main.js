'use strict';

var SVG = window.SVG;

angular.module('angulabApp')
  .controller('MainCtrl', ['$scope', 'imageService', function ($scope, imageService) {

    window.Design = SVG('drawing');

    $scope.images = imageService.getImages();
  }]);
