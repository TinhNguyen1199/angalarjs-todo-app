define(["angular"], function (angular) {
  "use strict";

  angular.module('todo-table.module', [])
    .component('todoTable', {
      templateUrl: 'app/components/todo-table/todo-table.component.html',
      controller: AddFormController,
    })

  function AddFormController() {
    console.log('TodoTableController :>> ', this);
  }

});
