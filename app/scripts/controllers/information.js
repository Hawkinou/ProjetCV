'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:InformationCtrl
 * @description
 * # InformationCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('InformationCtrl', function ($scope,$http){
		$scope.info="";
		$http.get("assets/info.json")
			.success(function(data){$scope.info = data;})
			.error(function(error){console.log(error);})
  });
