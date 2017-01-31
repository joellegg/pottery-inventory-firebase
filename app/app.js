const app = angular.module('InventoryApp', ['ngRoute']);

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      controller: 'HomeCtrl',
      templateUrl: '/app/partials/home.html'
    })
})

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAIPF6AcUhZrxZde0LweQpeCCOCRnnko60",
  authDomain: "inventory-app-hp.firebaseapp.com",
  databaseURL: "https://inventory-app-hp.firebaseio.com",
  storageBucket: "inventory-app-hp.appspot.com",
  messagingSenderId: "982604652667"
};
firebase.initializeApp(config);
