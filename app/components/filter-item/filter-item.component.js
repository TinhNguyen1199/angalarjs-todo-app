define(["myApp"], function (myApp) {
  myApp.register.controller("View1Controller", [
    "$scope",
    function ($scope) {
      $scope.title = "View 1";
    },
  ]);
});
