'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ui.router',
  'text.router'
]);
myApp.config(function($stateProvider, $urlRouterProvider, markdownConverterProvider) {
  //
  // default redirect for any unmatched URL
  // TODO: avoid this as much as possible
  $urlRouterProvider.otherwise('/text/hello-world');
  //
  // Now set up the states
  $stateProvider
    .state('textDisplay', {
      url: '/text/:filename',
      templateUrl: 'partials/wiki.base.html',
      controller: 'textRouterCtrl'
    });

  window.Showdown.extensions.intlinkConfig({
    pathPrefix: '#text/',
    pathSuffix: ''
  })

  markdownConverterProvider.config({ extensions: ['intlink', 'footnotify']});
});