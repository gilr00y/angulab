'use strict';

describe('Controller: LabController', function () {

  // load the controller's module
  beforeEach(module('angulabApp'));
  beforeEach(module('angulabAppMock'));

  var LabController, scope;

  // Initialize the controller
  beforeEach(inject(function ($controller, $rootScope, imageServiceMock, designServiceMock, svgServiceMock) {
    scope = $rootScope.$new();

    LabController = $controller('LabController', {
      $scope: scope,
      imageService: imageServiceMock,
      designService: designServiceMock,
      svgService: svgServiceMock
    });
  }));

  describe('LabController', function() {
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
