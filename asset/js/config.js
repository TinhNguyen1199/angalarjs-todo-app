requirejs.config({
  baseUrl: "./asset/js/lib",
  paths: {
    angular: "angular.min",
    angularUiRouter: "angular-ui-router.min",
    jquery: "jquery-3.3.1.slim.min",
    popper: "popper.min",
    bootstrap: "bootstrap.min",
    index: "../index",
    statusFilter: "../../app/shared/statusFilter",
  },
  shim: {
    bootstrap: {
      deps: ["jquery", "popper"],
    },
  },
});
