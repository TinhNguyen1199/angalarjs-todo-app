console.log("LOADING todo.service.js");

define(["angular"], function (angular) {
  "use strict";

  angular
    .module("todo-service.module", [])
    .service("todoService", TodoService);

  function TodoService($http) {
    "ngInject";

    console.log("LOADING todoService");

    const API_URL = "https://62e524cc20afdf238d77fb98.mockapi.io";

    return {
      fetchTodos: function () {
        return $http.get(`${API_URL}/todo/todos`);
      },
      getTodoById: function (id) {
        // Add code here
      },
      deleteTodoById: function (id) {
        // Add code here
      }
      // More code here...
    };
  }
});
