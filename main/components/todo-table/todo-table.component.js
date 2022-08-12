define(["angular"], function (angular) {
  "use strict";

  angular.module("todo-table.module", []).component("todoTable", {
    templateUrl: "main/components/todo-table/todo-table.component.html",
    controller: AddFormController,
  });

  function AddFormController(todoService) {
    "ngInject";

    var ctrl = this;

    console.log("TodoTableController :>> ", ctrl);

    ctrl.numRow = 4;
    ctrl.searchText = "";
    ctrl.todos = [];

    //init
    ctrl.$onInit = function () {
      todoService.fetchTodos().then(({ data }) => {
        ctrl.todos = data;
        console.log("ctrl.todos :>> ", ctrl.todos);
      });
    };

    //Delete todo function
    ctrl.DeleteData = function (id) {
      todoService.deleteTodoById(id);
    };

    //Check to finish todo function
    ctrl.finished = function (id, status) {
      console.log(`id: ${id}, stutus: ${status}`);
      ctrl.status = status == "Completed" ? "In progress" : "Completed";
      todoService.FinishTodo(id, ctrl.status);
    };
  }
});
