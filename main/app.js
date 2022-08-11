console.log("LOADING app.js");

define(["angular", "angularUiRouter", "../app/components/main.module"], function (ng) {
  'use strict';

  return ng.module("app", ["ui.router", "main.module"]);
});
