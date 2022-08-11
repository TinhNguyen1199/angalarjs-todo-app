console.log("LOADING main.module.js");

define([
  'angular',
  './add-form/add-form.component',
  './filter-item/filter-item.component',
  './todo-table/todo-table.component',
], function (angular) {
  'use strict';

  return angular.module('main.module', [
    'add-form.module',
    'filter-item.module',
    'todo-table.module'
  ]);
});