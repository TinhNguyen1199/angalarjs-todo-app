console.log("LOADING routes.js");

define(["./main/app"], function (app) {
  "use strict";

  return app.config(function (
    $stateProvider,
    $urlMatcherFactoryProvider,
    $urlRouterProvider
  ) {
    $urlRouterProvider.otherwise("/todo-list");

    $urlMatcherFactoryProvider.caseInsensitive(true);

    $stateProvider
      .state("todo-list", {
        url: "/todo-list",
        templateUrl: "app/template/todolist.html",
      })
      .state("edit", {
        url: "/edit/:id",
        templateUrl: "../../app/template/edit.html",
        // controller: "todoDetailCtrl",
      })
      .state("todoDetail", {
        url: "/detail/:id",
        templateUrl: "../../app/template/todo-detail.html",
        // controller: "todoDetailCtrl",
      })
  });
});
