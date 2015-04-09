'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:ExperienceCtrl
 * @description
 * # ExperienceCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('ExperienceCtrl', function ($scope,$http){
		$scope.expPro="";
		$http.get("assets/expPro.json")
			.success(function(data){$scope.expPro = data;})
			.error(function(error){console.log(error);})
  });
