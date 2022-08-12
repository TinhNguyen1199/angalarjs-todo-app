define(["angular"], function (angular) {
  "use strict";

  angular.module("edit-form.module", []).component("editForm", {
    templateUrl: "main/components/edit-form/edit-form.component.html",
    controller: EditFormController,
  });

  function EditFormController(todoService) {
    "ngInject";

    var ctrl = this;

    ctrl.todo = [];

    ctrl.$onInit = function () {
      todoService.getTodoById().then(({ data }) => {
        ctrl.todo = data[0];
        console.log(`Get data from ${ctrl.todo.id}`);
        console.log(ctrl.todo);
      });
    };

    ctrl.UpdateData = function (id, title, discription, status, dueDate) {
      todoService
        .updateTodo(id, title, discription, status, dueDate)
        .then(({ respone }) => {
          alert("Update successfully!");
        });
    };

    ctrl.clear = function () {
      ctrl.todo.title = "";
      ctrl.todo.discription = "";
      ctrl.todo.status = "";
    };
  }
});
