define(["angular"], function (angular) {
  "use strict";

  angular.module('filter-item.module', [])
    .component('filterItem', {
      templateUrl: 'app/components/filter-item/filter-item.component.html',
      controller: FilterItemController,
    })

  function FilterItemController() {
    var ctrl = this;

    console.log('FilterItemController :>> ', ctrl);
  }

});
