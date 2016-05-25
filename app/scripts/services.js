'use strict';

angular.module('linkedLadiesApp')
  .constant("baseURL","http://localhost:3000/")
  .service('introFactory', ['$resource', 'baseURL', function($resource, baseURL) {
    this.getIntro = function() {
      return $resource(baseURL + "intro/:id", null, {method:'GET'});
    };
  }]);
