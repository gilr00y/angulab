'use strict';

var SVG = window.SVG;

var images = [
  {src:'images/SVG/backpack 2.svg'},
  {src:'images/SVG/car.svg'},
  {src:'images/SVG/drop.svg'},
  {src:'images/SVG/label.svg'},
  {src:'images/SVG/packman.svg'},
  {src:'images/SVG/skull.svg'},
  {src: 'images/SVG/backpack.svg'},
  {src: 'images/SVG/chalkboard.svg'},
  {src: 'images/SVG/eye.svg'},
  {src: 'images/SVG/map.svg'},
  {src: 'images/SVG/paper plane.svg'},
  {src: 'images/SVG/speakers.svg'},
  {src: 'images/SVG/bill.svg'},
  {src: 'images/SVG/clock.svg'},
  {src: 'images/SVG/flag.svg'},
  {src: 'images/SVG/map2.svg'},
  {src: 'images/SVG/photo 2.svg'},
  {src: 'images/SVG/store.svg'},
  {src: 'images/SVG/bookmark.svg'},
  {src: 'images/SVG/cloud check.svg'},
  {src: 'images/SVG/glasses.svg'},
  {src: 'images/SVG/marker.svg'},
  {src: 'images/SVG/piggy.svg'},
  {src: 'images/SVG/tactic.svg'},
  {src: 'images/SVG/bookshelf.svg'},
  {src: 'images/SVG/cloud down.svg'},
  {src: 'images/SVG/glove.svg'},
  {src: 'images/SVG/mcfly.svg'},
  {src: 'images/SVG/pin.svg'},
  {src: 'images/SVG/toaster.svg'}
];

angular.module('angulabApp')
  .controller('MainCtrl', function ($scope) {

    window.Design = SVG('drawing');

    $scope.images = images;
  });
