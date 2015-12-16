"use strict";

(function(){
  angular
  .module("grumbles")
  .controller("GrumbleIndexController", [
    GrumbleIndexControllerFunction
  ]);
  function GrumbleIndexControllerFunction(){
    this.grumbles = [
      {
        title: "I am Grumble One"
      },
      {
        title: "I'm another Grumble"
      }
    ]
  }
})();
