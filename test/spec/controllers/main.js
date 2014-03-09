'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angulabApp'));
  beforeEach(angular.mock.module('angulabAppMock'));

  var MainCtrl, scope;

  // Initialize the controller
  beforeEach(inject(function ($controller, $rootScope, $imageServiceMock, $designServiceMock, $svgServiceMock) {
    scope = $rootScope.$new();
    var imageServiceMock = $imageServiceMock;
    var designServiceMock = $designServiceMock;
    var svgServiceMock = $svgServiceMock;

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      imageService: imageServiceMock,
      designService: designServiceMock,
      svgService: svgServiceMock
    });
  }));

  describe('MainCtrl', function() {
    it('should set images to images from imageService', function () {
      expect(scope.images.length).toBe(1);
      expect(scope.images[0].src).toBe('something.svg');
    });

    it('should set elements to elements from elementService', function() {
      expect(Object.keys(scope.elements).length).toBe(1);
      expect(scope.elements.testSVG).toEqual({ height: 10, width: 20});
    });
  });
});
