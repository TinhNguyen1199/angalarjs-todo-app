console.log("LOADING config.js");

requirejs.config({
  paths: {
    angular: "./lib/angular",
    angularUiRouter: "./lib/angular-ui-router.min",
    jquery: "./lib/jquery-3.3.1.slim.min",
    popper: "./lib/popper.min",
    bootstrap: "./lib/bootstrap.min",
    domReady: "./lib/domReady",
  },
  shim: {
    bootstrap: {
      deps: ["jquery", "popper"],
      exports: "bootstrap",
    },
    popper: {
      exports: "popper",
    },
    angular: {
      exports: "angular",
    },
    angularUiRouter: {
      deps: ["angular"],
    },
  },
  deps: ["./main/app.init"],
});
