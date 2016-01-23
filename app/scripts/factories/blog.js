'use strict';

/**
 * @ngdoc overview
 * @name blogApp
 * @description
 * # blogApp
 *
 * Main module of the application.
 */

angular.module('blogApp').factory('Blog',
  function($http, $q){
    var API = {
      getPosts : function(){
        return $q(function(resolve, reject) {
          var url = "/images/onepoint/blogposts.json";
          $http.get(url)
          .success(function(data) {
            return resolve(data);
          });
        });
      }
    };
    return API;
  });
