'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:CompetenceCtrl
 * @description
 * # CompetenceCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('CompetenceCtrl', function ($scope,$http){
		$scope.competence="";
		$http.get("assets/competence.json")
			.success(function(data){$scope.competence = data;})
			.error(function(error){console.log(error);})
  });
