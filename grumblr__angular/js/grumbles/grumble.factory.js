"use strict";

(function(){
  angular
  .module("grumbles")
  .factory("GrumbleFactory", [
    "$resource",
    Factoryfunction
  ]);

  function Factoryfunction ($resource){
    return $resource("http://localhost:3000/grumbles/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());
