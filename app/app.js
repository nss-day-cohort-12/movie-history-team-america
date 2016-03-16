"use strict";

let app = angular.module("MovieApp", ["ngRoute"]);

app.config(["$routeProvider",
  function ($routeProvider) {
    $routeProvider.
      when("/", {
        templateUrl: "partials/how-to.html"
        // resolve: { isAuth }
      }).
      when("/find", {
        templateUrl: "partials/find-new.html",
        controller: "FindCtrl"
        // resolve: { isAuth }
      }).
      when("/login", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl"
      }).
      when("/logout", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl"
      }).
      when("/search", {
        templateUrl: "partials/filter.html",
        controller: "SearchCtrl"
        // resolve: { isAuth }
      }).
      when("/user-movies", {
        templateUrl: "partials/user-movies.html",
        controller: "UserMovieCtrl"
        // resolve: { isAuth }
      }).
      otherwise({
        redirectTo: "/"
      });
  }]);