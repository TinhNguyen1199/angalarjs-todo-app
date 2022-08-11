console.log("LOADING app.js");

define([
  "angular",
  "angularUiRouter",
  "../app/main.module"
], function (angular) {
  'use strict';

  return angular.module("app", ["ui.router", "main.module"]);
});
