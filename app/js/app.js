'use strict';

// Declare app level module which depends on views, and components
var myBlog = angular.module('myBlog', [
  'ngRoute',
  'myBlogControllers'
]);

myBlog.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/', {
          templateUrl: 'main/main.html',
          controller: 'mainCtrl'
        }).
        when('/blog', {
          templateUrl: 'blog/blog.html',
          controller: 'blogCtrl'
        }).
        when('/blog/:_id', {
            templateUrl: 'post/post.html',
            controller: 'postCtrl'
        }).
        when('/add', {
            templateUrl: 'add/add.html',
            controller: 'addCtrl'
        }).
        otherwise({
          redirectTo: '/'
        });
  }]);
