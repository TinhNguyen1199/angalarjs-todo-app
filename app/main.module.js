console.log("LOADING main.module.js");

define([
  'angular',
  './components/add-form/add-form.component',
  './components/filter-item/filter-item.component',
  './components/todo-table/todo-table.component',
], function (angular) {
  'use strict';

  return angular.module('main.module', [
    'add-form.module',
    'filter-item.module',
    'todo-table.module'
  ]);
});