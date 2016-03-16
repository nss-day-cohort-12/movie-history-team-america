"use strict";

app.controller("FindCtrl", [
  "$scope",
  "MovieFactory",

  function($scope, MovieFactory) {
    $scope.findTitle = "";
    $scope.movie = false;

    // this function is triggered by find button
    $scope.find = function() {
    // takes findTitle string and returns search results from OMDB API

    MovieFactory($scope.findTitle).then(
    	movieCollection => {console.log(movieCollection)
    		$scope.movie = movieCollection;
    		console.log($scope.movie)
    	},
    	err => console.log(err)
    	);
    }
  }

]);