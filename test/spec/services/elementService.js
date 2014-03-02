'use strict';

describe('Service: elementService', function() {
  // load module
  beforeEach(module('angulabApp'));

  var elementService;
  beforeEach(inject(function($injector) {
    elementService = $injector.get('elementService');
  }));

  describe('allElements', function() {
    it('should initialize with no elements', function() {
      expect(Object.keys(elementService.allElements()).length).toBe(0);
    });
  });

  describe('addElement', function() {
    it('should add an element to elements', function() {
      expect(Object.keys(elementService.allElements()).length).toBe(0);
      var element = { width: 10, height: 20 };
      var id = 'testId';
      elementService.addElement(element, id);

      var elements = elementService.allElements();
      expect(Object.keys(elements).length).toBe(1);
      expect(elements[id]).toEqual(element);
    });
  });

  describe('setAttr', function() {
    describe('when element and attr exists', function() {
      it('should set the value of the attr', function() {
        var element = { width: 10, height: 20 };
        var id = 'testId';
        elementService.addElement(element, id);

        elementService.setAttr(id, 'width', 20);
        expect(elementService.getAttr(id, 'width')).toBe(20);
      });
    });

    describe('when element does not exist', function() {
      it('should throw an exception', function() {
        expect(function() { elementService.setAttr('id', 'attr', 100); })
          .toThrow(new Error('Element with id: id does not exist'));
      });
    });

    describe('when attr does not exist', function() {
      it('should create and set the attr', function() {
        var element = { width: 10, height: 20 };
        var id = 'testId';
        elementService.addElement(element, id);

        elementService.setAttr(id, 'somethingElse', 20);
        expect(elementService.getAttr(id, 'somethingElse')).toBe(20);
      });
    });
  });

  describe('getAttr', function() {
    describe('when element and attr exists', function() {
      it('should return the value of the attr', function() {
        var element = { width: 10, height: 20 };
        var id = 'testId';
        elementService.addElement(element, id);

        expect(elementService.getAttr(id, 'width')).toBe(10);
      });
    });

    describe('when element does not exist', function() {
      it('should throw an exception', function() {
        expect(function() { elementService.getAttr('id', 'attr'); })
          .toThrow(new Error('Element with id: id does not exist'));
      });
    });

    describe('when attr does not exist', function() {
      it('should return undefined', function() {
        var element = { width: 10, height: 20 };
        var id = 'testId';
        elementService.addElement(element, id);

        expect(typeof elementService.getAttr(id, 'somethingElse')).toBe('undefined');
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
        elementService.addElement(element1, id1);
        elementService.addElement(element2, id2);

        expect(elementService.getElement(id1)).toBe(element1);
        expect(elementService.getElement(id2)).toBe(element2);
      });
    });

    describe('when element with id does not exist', function() {
      it('should return undefined', function() {
        expect(typeof elementService.getElement('testId')).toBe('undefined');
      });
    });
  });

});
