"use strict";

app.controller("FindCtrl", [
  "$scope",
  "MovieFactory",

  function($scope, MovieFactory) {
    $scope.findTitle = "";
    $scope.movie = false;
    $scope.movieImdbID = "";

    // this function is triggered by find button
    $scope.find = function() {
    // takes findTitle string and returns search results from OMDB API
      MovieFactory($scope.findTitle).then(
      	movieCollection => {console.log(movieCollection)
      		$scope.movie = movieCollection;
          $scope.movieImdbId = $scope.movie.imdbID;
      	},
      	err => console.log(err)
      	);
    }


    $scope.add = function () {
      $scope.movie = false;
      $scope.findTitle = "";

      //take movie and add tracked id of true
      

    }
  }

]);