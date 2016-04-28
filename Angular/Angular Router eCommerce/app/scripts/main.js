(function() {

  angular.module('app', ['ngRoute'])

    .config(function($routeProvider) {

    $routeProvider

      .when('/', {
      templateUrl: 'templates/home/index.html',
      controller: 'homeController'
    })

      .when('/about', {
      templateUrl: 'templates/about/index.html',
      controller: 'aboutController'
    })

      .when('/products', {
      templateUrl: 'templates/products/index.html',
      controller: 'productsController'
    })

      .when('/contact', {
      templateUrl: 'templates/contact/index.html',
      controller: 'contactController'
    })

      .when('/404', {
      templateUrl: 'templates/404/index.html'
    })

      .otherwise({redirectTo: '/404'});

  })

    .controller('HeaderController', ['$scope', '$location', function($scope, $location) {
      $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
      };
    }])

    .controller('homeController', ['$scope', '$log', function($scope, $log) {
      $scope.name = 'Welcome Home';
    }])

    .controller('aboutController', ['$scope', '$log', function($scope, $log) {
      $scope.name = 'About Us';

      $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
      });

    }])

    .controller('productsController', ['$scope', '$log', function($scope, $log) {
      $scope.products = [
        {
          name: 'Product 1',
          imageURL: 'images/1.svg'
        },
        {
          name: 'Product 2',
          imageURL: 'images/2.svg'
        },
        {
          name: 'Product 3',
          imageURL: 'images/3.svg'
        },
        {
          name: 'Product 4',
          imageURL: 'images/4.svg'
        },
        {
          name: 'Product 5',
          imageURL: 'images/5.svg'
        },
        {
          name: 'Product 6',
          imageURL: 'images/6.svg'
        }
      ]
    }])

    .controller('contactController', ['$scope', '$log', function($scope, $log) {
      $scope.name = 'Contact';
    }])

})();
