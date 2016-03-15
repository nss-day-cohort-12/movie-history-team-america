"use strict";

app.controller("FindCtrl", [
  "$scope",

  function($scope) {
    $scope.findTitle = "";

    // this function is triggered by find button
    $scope.find = function() {
    // takes findTitle string and returns search results from OMDB API
    }
  }

]);