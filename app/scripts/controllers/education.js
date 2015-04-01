'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:EducationCtrl
 * @description
 * # EducationCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('EducationCtrl', function ($scope,$http){
		$scope.education="";
		$http.get("assets/education.json")
			.success(function(data){$scope.education = data;})
			.error(function(error){console.log(error);})
  });
