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
            data.forEach(function(post){
              if (post.media.indexOf('imgs') > -1){
                post.is_img = true;
                post.url = "/images/onepoint/" + post.media;
              }
              if (post.media.indexOf('videos') > -1){
                post.is_video = true;
                post.url = "/images/onepoint/" + post.media;
              }
              if (post.media.indexOf('youtu.be') > -1 || post.media.indexOf('youtube') > -1){
                post.is_youtube = true;
                post.media = post.media.replace("watch?v=", "v/");
                post.media = "http://www.youtube.com/embed/" + post.media.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0];
              }
            });
            console.log(data);
            return resolve(data);
          });
        });
      }
    };
    return API;
  });
