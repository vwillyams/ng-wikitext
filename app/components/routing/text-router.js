/**
 * Created by Victor on 27/06/2015.
 */
'use strict';

angular.module('text.router', ['ui.router', 'btford.markdown', 'wikiFiltering']).controller('textRouterCtrl', function ($scope, $http, $stateParams, $filter) {
    $scope.$watch('text', function(){
      // TODO oh god, this looks horrifying. replace it with something more sensible.
      $scope.text = $filter('preprocess')($scope.text);
    });

    $http.get('wiki-text/' + $stateParams.filename + '.txt').success(function(data){
      $scope.text = $filter('preprocess')(data);
    });

});