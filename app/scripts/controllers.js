'use strict';

angular.module('linkedLadiesApp')
  .controller('IndexController', ['$scope', 'introFactory', function($scope, introFactory) {
    $scope.intro = introFactory.getIntro().get({id: 0})
    .$promise.then(
      function(response) {
        $scope.intro = response;
      },
      function(response) {
        $scope.message = "Error: " + response.status + " " + response.statusText;
      }
    );
  }]);
