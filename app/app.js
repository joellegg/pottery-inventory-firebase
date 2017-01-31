const app = angular.module('InventoryApp', ['ngRoute']);

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      controller: 'HomeCtrl',
      templateUrl: '/app/partials/home.html'
    })
})
