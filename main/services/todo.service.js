console.log("LOADING todo.service.js");

define(["angular"], function (angular) {
  "use strict";

  angular.module("todo-service.module", []).service("todoService", TodoService);

  function TodoService($http, $stateParams) {
    "ngInject";

    console.log("LOADING todoService");

    const API_URL = "https://62e524cc20afdf238d77fb98.mockapi.io";

    return {
      fetchTodos: function () {
        return $http.get(`${API_URL}/todo/todos`);
      },
      getTodoById: function () {
        return $http.get(`${API_URL}/todo/todos`, {
          params: { id: $stateParams.id },
        });
        // console.log($stateParams.id);
      },
      deleteTodoById: function (id) {
        let msg = "Are you sure to delete this item?";
        if (confirm(msg) == true) {
          $http.delete(`${API_URL}/todo/todos/${id}`);
          alert("Item has deleted Successfully");
        } else {
          console.log("You choose canceled delete!");
        }
      },
      addTodo: function (title, dueDate) {
        const today = new Date();

        return $http.post(`${API_URL}/todo/todos`, {
          title: title,
          status: today > dueDate ? "Completed" : "In progress",
          dueDate: dueDate,
          isCompleted: today > dueDate,
        });
      },
      updateTodo: function (id, title, discription, status, dueDate) {
        return $http.put(`${API_URL}/todo/todos/${id}`, {
          title: title,
          discription: discription,
          status: status,
          dueDate: dueDate,
          isCompleted: status === "Completed",
        });
      },
    };
  }
});
