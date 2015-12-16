"use strict";

(function(){
  angular
  .module( "grumblr", [
    "ui.router",
    "grumbles"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("grumbleIndex", {
      url: "/grumbles",
      templateUrl: "js/grumbles/views/index.html",
      controller: "GrumbleIndexController",
      controllerAs: "GrumbleIndexViewModel"
    })
    .state("grumbleShow", {
      url: "/grumbles/:id",
      templateUrl: "js/grumbles/views/show.html",
      controller: "GrumbleShowController",
      controllerAs: "GrumbleShowViewModel"
    });
  }
}());
