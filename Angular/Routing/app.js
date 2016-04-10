(function() {
		
	var app = angular.module('router', ['ngRoute']);
		
	app.config(function($routeProvider) {
		
		$routeProvider
		
		.when('/', {
			templateUrl: 'templates/one.html',
			controller: 'firstController'
		})
		
		.when('/second', {
			templateUrl: 'templates/two.html',
			controller: 'secondController'
		});
		
	});
	
	app.controller('HeaderController', ['$scope', '$location', function($scope, $location) {
		$scope.isActive = function(viewLocation) {
			return viewLocation === $location.path();
		};
	}]);
	
	app.controller('firstController', ['$scope', '$log', function($scope, $log) {
		$scope.name = 'First';
	}]);
	
	app.controller('secondController', ['$scope', '$log', function($scope, $log) {
		$scope.name = 'Second';
	}]);
		
})();