/**
 * Created by Victor on 27/06/2015.
 */
'use strict';

angular.module('text.router', ['ui.router', 'btford.markdown']).controller('textRouterCtrl', function ($scope, $http, $stateParams) {

    $http.get('wiki-text/' + $stateParams.filename + '.txt').success(function(data){
      $scope.text = data;
    });
});