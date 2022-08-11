define(["angular"], function (angular) {
  "use strict";

  angular.module('todo-table.module', [])
    .component('todoTable', {
      templateUrl: 'main/components/todo-table/todo-table.component.html',
      controller: AddFormController,
    })

  function AddFormController(todoService) {
    'ngInject';
    
    var ctrl = this;
    
    console.log('TodoTableController :>> ', ctrl);

    ctrl.todos = [];

    ctrl.$onInit = function () {
      todoService.fetchTodos().then(({ data }) => {
        ctrl.todos = data;
        console.log('ctrl.todos :>> ', ctrl.todos);
      });
    }
  }

});
