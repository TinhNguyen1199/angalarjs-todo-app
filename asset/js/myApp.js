define(function () {
  var myApp = angular.module("myApp", ["ui.router"]);

  myApp.controller("myAppCtrl", function ($scope) {
    $scope.title = "hello, from my app!";
  });

  myApp.config(function (
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
        controller: "todoDetailCtrl",
      })
      .state("todoDetail", {
        url: "/detail/:id",
        templateUrl: "../../app/template/todo-detail.html",
        controller: "todoDetailCtrl",
      })
      .state("todo-list", {
        url: "/todo-list",
        templateUrl: "../../app/template/todolist.html",
        controller: "appCtrl",
      });
  });

  //Component

  myApp.component("addForm", {
    templateUrl: "../../app/components/add-form/add-form.component.html",
    controller: "addFormCtrl",
  });

  myApp.component("filterItem", {
    templateUrl: "../../app/components/filter-item/filter-item.component.html",
    controller: "appCtrl",
  });

  myApp.component("todoTable", {
    templateUrl: "../../app/components/todo-table/todo-table.component.html",
    controller: "appCtrl",
  });
});
