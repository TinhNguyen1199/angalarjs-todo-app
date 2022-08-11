define(["angular"], function (angular) {
  "use strict";

  angular.module("add-form.module", [])
    .component("addForm", {
      templateUrl: "main/components/add-form/add-form.component.html",
      controller: AddFormController,
    });

  function AddFormController() {
    var ctrl = this;

    console.log("AddFormController :>> ", ctrl);
  }
});
