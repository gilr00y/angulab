angular.module('angulabApp')
  .directive('svgCard', function() {
    return {
      restrict: 'E',
      scope: {
        element: '=',
        id: '@'
      },
      templateUrl: '../../views/svgCard.html'
    }
  });
