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
		
		.when('/api', {
			templateUrl: 'templates/api.html',
			controller: 'apiController',
			controllerAs: 'results'
		})
		
		.when('/404', {
			templateUrl: 'templates/error.html'
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
		
	.controller('apiController', ['$http', function($http) {
		var controller = this;
		
		$http.get('https://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com').success(function(listResults, status){
			controller.properties = listResults;
			controller.status = status;
		});
		
	}]);		
		
})();