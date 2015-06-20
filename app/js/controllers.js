'use strict';

var controllers = angular.module('myBlogControllers',[]);

controllers.controller('mainCtrl', ['$scope', '$http',
    function($scope, $http) {

    }]);

controllers.controller('blogCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.posts = [{"title" : "tittle", "subtitle" : "subtitle"}];
        //$http.get('/posts').success(function (data) {
        //    $scope.posts = data;
        //}).failed(function(){
        //    $scope.posts = [{"title" : "tittle", "subtitle" : "subtitle"}]
        //});
    }]);