define(["angular"], function (angular) {
  angular.module("myAppCtrl", []).factory("fetchData", [
    "$http",
    function ($http) {
      $http
        .get("https://62e524cc20afdf238d77fb98.mockapi.io/todo/todos")
        .then(function (respone) {
          return respone.data;
        });
    },
  ]);
});
