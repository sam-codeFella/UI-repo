var app = angular.module('flapperNews', ['ui.router']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
    
      $ 
        .state('home', {
          url: '/home',
          templateUrl: '/home.html',
          controller: 'MainCtrl'
        });
    
      $urlRouterProvider.otherwise('home');

      .state('posts', {
  url: '/posts/{id}',
  templateUrl: '/posts.html',
  controller: 'PostsCtrl'
});
    }]);

app.controller('MainCtrl', ['$scope',
function($scope){
    '$scope',
    'posts',
    function($scope, posts){
        $scope.posts = posts.posts;
    }

      $scope.addPost = function(){
        if(!$scope.title || $scope.title === '') { return; }
        $scope.posts.push({
          title: $scope.title,
          link: $scope.link,
          upvotes: 0
        });
        $scope.title = '';
        $scope.link = '';
      };

      $scope.incrementUpvotes = function(post) {
        post.upvotes += 1;
      };


      app.factory('posts', [function(){
        var o = {
          posts: []
        };
        return o;
      }]);

      

      
}]);

