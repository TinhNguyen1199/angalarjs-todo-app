define(["angular"], function (angular) {
  "use strict";

  angular.module("add-form.module", []).component("addForm", {
    templateUrl: "main/components/add-form/add-form.component.html",
    controller: AddFormController,
  });

  function AddFormController(todoService) {
    "ngInject";

    var ctrl = this;

    ctrl.title = "";
    ctrl.dueDate = "";
    ctrl.SendData = function (title, dueDate) {
      todoService.addTodo(title, dueDate);
    };
  }
});
