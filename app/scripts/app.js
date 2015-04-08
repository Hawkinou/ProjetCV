'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */
angular
  .module('webApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/information.html',
        controller: 'InformationCtrl'
      })
      .when('/information', {
        templateUrl: 'views/information.html',
        controller: 'InformationCtrl'
      })
	  .when('/education', {
        templateUrl: 'views/formation.html',
        controller: 'EducationCtrl'
      })
	  .when('/competence', {
        templateUrl: 'views/competence.html',
        controller: 'CompetenceCtrl'
      })
	  .when('/projet', {
        templateUrl: 'views/projet.html',
        controller: 'ProjetCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
