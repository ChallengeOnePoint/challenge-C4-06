'use strict';

/**
 * @ngdoc overview
 * @name blogApp
 * @description
 * # blogApp
 *
 * Main module of the application.
 */

angular.module('blogApp')
  .controller('MainCtrl', function ($scope, Blog) {
    $scope.posts = [];

    Blog.getPosts().then(function(posts){
      $scope.posts = posts;
    });

    $scope.openModal = function(id){

    };
  });
