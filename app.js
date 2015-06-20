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
        otherwise({
          redirectTo: '/'
        });
  }]);
