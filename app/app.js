'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.templates'
]).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider
      .otherwise({redirectTo: '/templates'});
}]);
