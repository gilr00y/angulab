'use strict';
var images = [
  {src:'images/SVG/backpack 2.svg'},
  {src:'images/SVG/car.svg'},
  {src:'images/SVG/drop.svg'},
  {src:'images/SVG/label.svg'},
  {src:'images/SVG/packman.svg'},
  {src:'images/SVG/skull.svg'}
];

angular.module('angulabApp')
  .controller('MainCtrl', function ($scope) {
    $scope.images = images;
  });
