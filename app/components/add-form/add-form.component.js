define(["myApp"], function (myApp) {
  "use strict";
  return myApp
    .controller("addFormCtrl", function ($scope) {})
    .component("addForm", {
      templateUrl: "../../app/components/add-form/add-form.component.html",
      controller: "addFormCtrl",
    });
});
