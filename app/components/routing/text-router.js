/**
 * Created by Victor on 27/06/2015.
 */
'use strict';

angular.module('text.router', ['ui.router', 'file.reader']).controller('textRouterCtrl', function ($scope, fileReader, $http) {

    $http.get("wiki-text/testbed.txt").success(function(data){
      $scope.text = data;
    });
});