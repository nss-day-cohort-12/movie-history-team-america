"use strict";

app.controller("FindCtrl", [
  "$scope",
  "MovieFactory",

  function($scope, MovieFactory) {
    $scope.findTitle = "";
    $scope.movie = false;
    $scope.movieImdbID = "";
    $scope.posterSrc = "http://img.omdbapi.com/?i=tt0113277&apikey=7c212437";

    // this function is triggered by find button
    $scope.find = function() {
    // takes findTitle string and returns search results from OMDB API

    MovieFactory($scope.findTitle).then(
    	movieCollection => {console.log(movieCollection)
    		$scope.movie = movieCollection;
        $scope.posterSrc = `http://img.omdbapi.com/?i=${$scope.movie.imdbID}&apikey=7c212437`;
        $scope.movieImdbId = $scope.movie.imdbID;
    	},
    	err => console.log(err)
    	);
    }
  }

]);