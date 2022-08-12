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
    ctrl.loading = false;

    //Add new todo item function
    ctrl.SendData = function (title, dueDate) {
      ctrl.loading = true;
      todoService.addTodo(title, dueDate).then(() => {
        ctrl.loading = false;
      });
    };
  }
});
