console.log("LOADING statusFilter.js");

define(["angular"], function (angular) {
  'user strict';

  angular.module('status-filter.module', [])
    .filter("statusFilter", function () {
      return function (input) {
        if (input == true) return "Completed";
        else return "In proress";
      };
    });
})

