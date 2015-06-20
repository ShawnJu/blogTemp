'use strict';

var controllers = angular.module('myBlogControllers', []);

controllers.controller('mainCtrl', ['$scope', '$http',
    function ($scope, $http) {

    }]);

controllers.controller('blogCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $scope.posts = [{"title": "tittle", "subtitle": "subtitle", "id" : "911"}];
        //$http.get('/posts').success(function (data) {
        //    $scope.posts = data;
        //}).failed(function(){
        //    $scope.posts = [{"title" : "tittle", "subtitle" : "subtitle"}]
        //});
    }]);

controllers.controller('postCtrl', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
        $scope.para = $routeParams._id;
        $http.get('/posts/' + $routeParams._id).success(function (data) {
            $scope.post = data;
        });
            }]);

controllers.controller('addCtrl', ['$scope', '$http', '$location', function  ($scope, $http, $location) {  // 注入$location服务
    $scope.form = {};   // 初始化一个NG数据模型
    $scope.form.submit = function () {
        console.log(form);
        $http.post('/posts/add', $scope.form).success(function () {
            $location.url('/'); // 返回首页
        });
    };
}]);