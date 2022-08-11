define(["myApp", "addFormCtrl"], function (myApp) {
  "use strict";
  return myApp.config(function (
    $stateProvider,
    $urlMatcherFactoryProvider,
    $urlRouterProvider
  ) {
    $urlRouterProvider.otherwise("/todo-list");
    $urlMatcherFactoryProvider.caseInsensitive(true);
    $stateProvider
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
      .state("todo-list", {
        url: "/todo-list",
        templateUrl: "../../app/template/todolist.html",
        controller: "addFormCtrl",
      });
  });
});
