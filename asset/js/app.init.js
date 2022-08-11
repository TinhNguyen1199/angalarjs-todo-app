define(["require", "angular", "myApp", "routes"], function (require, ng) {
  "use strict";

  require(["domReady!"], function (document) {
    ng.bootstrap(document, ["myApp"]);
  });
});
