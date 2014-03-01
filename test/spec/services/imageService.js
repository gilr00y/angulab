'use strict';

describe('Service: imageService', function() {
  // load module
  beforeEach(module('angulabApp'));

  var imageService;
  beforeEach(inject(function($injector) {
    imageService = $injector.get('imageService');
  }));

  describe('getImages', function() {
    it('should return images array', function() {
      expect(imageService.getImages().length).toBe(30);
    });

    it('each image should be an svg', function() {
      var images = imageService.getImages();
      for(var i = 0; i < images.length; i++) {
        expect(/.+\.svg$/.test(images[i].src)).toBe(true);
      }
    });
  });
});
