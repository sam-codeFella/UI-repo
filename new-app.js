var app = angular.module('flapperNews', []);

app.controller('MainCtrl', ['$scope',
function($scope){
    '$scope',
    'posts',
    function($scope, posts){
        $scope.posts = posts.posts;
    }

    app.factory('posts', [function(){
        var o = {
          posts: []
        };
        return o;
      }]);


}]);
