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
    $scope.current_post = {};

    Blog.getPosts().then(function(posts){
      $scope.posts = posts;
    });

    $scope.openModal = function(post){
      $scope.current_post = post;
      $('#blog_modal').openModal();
    };
  });
