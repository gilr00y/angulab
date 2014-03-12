'use strict';

describe('Service: designService', function() {
  // load module
  beforeEach(module('angulabApp'));

  var designService;
  beforeEach(inject(function($injector) {
    designService = $injector.get('designService');
  }));

  describe('allElements', function() {
    it('should initialize with no elements', function() {
      expect(Object.keys(designService.allElements()).length).toBe(0);
    });
  });

  describe('addElement', function() {
    it('should add an element to elements', function() {
      expect(Object.keys(designService.allElements()).length).toBe(0);
      var element = { width: 10, height: 20 };
      var id = 'testId';
      designService.addElement(element, id);

      var elements = designService.allElements();
      expect(Object.keys(elements).length).toBe(1);
      expect(elements[id]).toEqual(element);
    });
  });

  describe('setAttr', function() {
    describe('when element and attr exists', function() {
      it('should set the value of the attr', function() {
        var element = { width: 10, height: 20 };
        var id = 'testId';
        designService.addElement(element, id);

        designService.setAttr(id, 'width', 20);
        expect(designService.getAttr(id, 'width')).toBe(20);
      });
    });

    describe('when element does not exist', function() {
      it('should throw an exception', function() {
        expect(function() { designService.setAttr('id', 'attr', 100); })
          .toThrow(new Error('Element with id: id does not exist'));
      });
    });

    describe('when attr does not exist', function() {
      it('should create and set the attr', function() {
        var element = { width: 10, height: 20 };
        var id = 'testId';
        designService.addElement(element, id);

        designService.setAttr(id, 'somethingElse', 20);
        expect(designService.getAttr(id, 'somethingElse')).toBe(20);
      });
    });
  });

  describe('getAttr', function() {
    describe('when element and attr exists', function() {
      it('should return the value of the attr', function() {
        var element = { width: 10, height: 20 };
        var id = 'testId';
        designService.addElement(element, id);

        expect(designService.getAttr(id, 'width')).toBe(10);
      });
    });

    describe('when element does not exist', function() {
      it('should throw an exception', function() {
        expect(function() { designService.getAttr('id', 'attr'); })
          .toThrow(new Error('Element with id: id does not exist'));
      });
    });

    describe('when attr does not exist', function() {
      it('should return undefined', function() {
        var element = { width: 10, height: 20 };
        var id = 'testId';
        designService.addElement(element, id);

        expect(typeof designService.getAttr(id, 'somethingElse')).toBe('undefined');
      });
    });
  });

  describe('getElement', function() {
    describe('when element with id exists', function() {
      it('should return the element with id', function() {
        var element1 = { width: 10, height: 20 };
        var id1 = 'testId';
        var element2 = { width: 50, height: 100 };
        var id2 = 'testId2';
        designService.addElement(element1, id1);
        designService.addElement(element2, id2);

        expect(designService.getElement(id1)).toBe(element1);
        expect(designService.getElement(id2)).toBe(element2);
      });
    });

    describe('when element with id does not exist', function() {
      it('should return undefined', function() {
        expect(typeof designService.getElement('testId')).toBe('undefined');
      });
    });
  });

});
