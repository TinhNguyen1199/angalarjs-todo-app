requirejs.config({
  baseUrl: "./asset/js/lib",
  paths: {
    angular: "angular",
    angularUiRouter: "angular-ui-router.min",
    jquery: "jquery-3.3.1.slim.min",
    popper: "popper.min",
    bootstrap: "bootstrap.min",
    index: "../index",
    statusFilter: "../../app/shared/filters/statusFilter",
    addFormCtrl: "../../../app/components/add-form/add-form.component",
    filterItem: "../../../app/components/filter-item/filter-item.component",
    todoTable: "../../../app/components/todo-table/todo-table.component",
    myApp: "../myApp",
  },
  shim: {
    bootstrap: {
      deps: ["jquery", "popper"],
      exports: "bootstrap",
    },
    popper: {
      exports: "popper",
    },

    index: {
      deps: ["angularUiRouter"],
    },
    angularUiRouter: {
      deps: ["angular"],
    },
    myApp: {
      deps: ["angularUiRouter"],
    },
  },
});

// require(["index"], function () {
//   angular.bootstrap(document, ["app"]);
// });

require(["myApp"], function () {
  angular.bootstrap(document, ["myApp"]);
});
