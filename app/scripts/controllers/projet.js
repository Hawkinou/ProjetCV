'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:ProjetCtrl
 * @description
 * # ProjetCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('ProjetCtrl', function ($scope,$http){
		$scope.projet="";
		$http.get("assets/projet.json")
			.success(function(data){$scope.projet = data;})
			.error(function(error){console.log(error);})
  });
