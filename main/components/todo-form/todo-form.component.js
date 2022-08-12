define(["angular"], function (angular) {
  "use strict";

  angular.module("todo-form.module", []).component("todoForm", {
    templateUrl: "main/components/todo-form/todo-form.component.html",
    controller: EditFormController,
  });

  function EditFormController(todoService) {
    "ngInject";

    var ctrl = this;

    ctrl.todo = [];

    // Initialze and get todo from api
    ctrl.$onInit = function () {
      todoService.getTodoById().then(({ data }) => {
        ctrl.todo = data[0];
        console.log(`Get data from to do ${ctrl.todo.id}`);
      });
    };
  }
});
