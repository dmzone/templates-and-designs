(function() {
		
	angular.module('router', ['ngRoute'])
		
	.config(function($routeProvider) {
		
		$routeProvider
		
		.when('/', {
			templateUrl: 'templates/one.html',
			controller: 'firstController'
		})
		
		.when('/second', {
			templateUrl: 'templates/two.html',
			controller: 'secondController'
		})
		
		.when('/404', {
			templateUrl: 'templates/error.html',
			controller: 'errorController'
		})
		
		.otherwise({redirectTo: '/404'});
		
	})
	
	.controller('HeaderController', ['$scope', '$location', function($scope, $location) {
		$scope.isActive = function(viewLocation) {
			return viewLocation === $location.path();
		};
	}])
	
	.controller('firstController', ['$scope', '$log', function($scope, $log) {
		$scope.name = 'First';
	}])
	
	.controller('secondController', ['$scope', '$log', function($scope, $log) {
		$scope.name = 'Second';
	}])
		
	.controller('errorController', ['$scope', '$log', function($scope, $log) {
		$scope.name = 'Help me!';
	}]);		
		
})();