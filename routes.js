console.log("LOADING routes.js");

define(["./app/app"], function (app) {
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
        templateUrl: "./main/template/todolist.html",
      })
      .state("edit", {
        url: "/edit/:id",
        templateUrl: "./main/template/edit.html",
        // controller: "todoDetailCtrl",
      })
      .state("todoDetail", {
        url: "/detail/:id",
        templateUrl: "./main/template/todo-detail.html",
        // controller: "todoDetailCtrl",
      })
  });
});
