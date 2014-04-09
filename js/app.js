// Declare app level module which depends on filters, and services
angular.module('myApp', [
		'myApp.controllers',
		'myApp.services',
		'myApp.directives',
		'ngRoute'
	]).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $routeProvider.
          when('/', {templateUrl:'partial/menu.html'}).
          otherwise({redirectTo:'/'});
      $locationProvider.html5Mode(false);
    }]);

