'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ui.router',
  'text.router'
]);
myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/text/testbed");
  //
  // Now set up the states
  $stateProvider
    .state('textDisplay', {
      url: "/text/:filename",
      templateUrl: "partials/wiki.base.html",
      controller: 'textRouterCtrl'
    });
});