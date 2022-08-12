console.log("LOADING main.module.js");

define([
  "angular",

  // COMPONENTS
  "./components/add-form/add-form.component",
  "./components/filter-item/filter-item.component",
  "./components/todo-table/todo-table.component",
  "./components/edit-form/edit-form.component",
  "./components/todo-form/todo-form.component",
  // SERVICES
  "./services/todo.service",

  // DIRECTIVES

  // FILTERS
  "./shared/filters/statusFilter",
], function (angular) {
  "use strict";

  return angular.module("main.module", [
    "add-form.module",
    "filter-item.module",
    "todo-table.module",
    "todo-service.module",
    "status-filter.module",
    "edit-form.module",
    "todo-form.module",
  ]);
});
