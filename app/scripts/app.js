'use strict';

angular.module('linkedLadiesApp', ['ui.router', 'ngResource'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      // Route for the home page
      .state('app', {
        url:'/',
        views: {
          'header': {
            templateUrl : 'views/header.html',
          },
          'content': {
            templateUrl : 'views/home.html',
            controller  : 'IndexController'
          },
          'footer': {
            templateUrl : 'views/footer.html',
          }
        }
      });

    $urlRouterProvider.otherwise('/');
});
