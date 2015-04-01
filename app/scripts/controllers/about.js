'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	$scope.name ="World";
	$scope.getName = function(h){
	  $scope.name=h;
	}
	$scope.changeName = function(){
		$scope.name = $scope.newName;
	}
  });
