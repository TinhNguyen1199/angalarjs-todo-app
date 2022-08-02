var app = angular.module("app", ["ui.router"]);
var url = "https://62e524cc20afdf238d77fb98.mockapi.io/todo/todos";

//--------------------------------------
// UI route
app.config(function (
  $stateProvider,
  $urlMatcherFactoryProvider,
  $urlRouterProvider
) {
  $urlRouterProvider.otherwise("/todo-list");
  $urlMatcherFactoryProvider.caseInsensitive(true);
  $stateProvider
    .state("edit", {
      url: "/edit/:id",
      templateUrl: "../../app/template/edit.html",
      controller: "todoDetailCtrl",
    })
    .state("todoDetail", {
      url: "/detail/:id",
      templateUrl: "../../app/template/todo-detail.html",
      controller: "todoDetailCtrl",
    })
    .state("todo-list", {
      url: "/todo-list",
      templateUrl: "../../app/template/todolist.html",
      controller: "appCtrl",
    });
});
app.run(function ($rootScope) {});

app.controller("appCtrl", function ($http, $scope, $rootScope) {
  $scope.title = null;
  $scope.discription = null;
  $scope.isComplete = null;
  $scope.dueDate = null;

  // Clear function
  $scope.clear = function () {
    $scope.title = "";
    $scope.discription = "";
    $scope.dueDate = null;
  };
  // Check due date function
  $scope.checkDuedate = function (dueDate) {
    const today = new Date();
    if (today > dueDate) {
      console.log(`${today} is greater than ${dueDate}`);
      $scope.isComplete = true;
    } else {
      console.log(`${today} is smaller than ${dueDate}`);
      $scope.isComplete = false;
    }
  };

  // Create
  $scope.SendData = function (title, dueDate) {
    $scope.checkDuedate(dueDate);

    $http
      .post(url, {
        title: title,
        isComplete: $scope.isComplete,
        dueDate: dueDate,
      })
      .then(function (respone) {
        console.log(respone);

        $scope.fetchData();
        $scope.clear();
      });
  };

  // Delete
  $scope.DeleteData = function (id) {
    var updateUrl = `${url}/${id}`;
    console.log(updateUrl);
    $http.delete(updateUrl).then(function (respone) {
      console.log(respone);
      console.log("delete completed");
      $scope.fetchData();
    });
  };
  //Get all todo list
  $scope.fetchData = function () {
    $http.get(url).then(function (respone) {
      $scope.todos = respone.data;
      console.log("fetch working");
    });
  };

  $scope.fetchData();

  //Finished todo
  $scope.finished = function (id, avtive) {
    if (avtive) {
      $scope.isComplete = true;
    } else {
      $scope.isComplete = false;
    }

    console.log("Done: " + $scope.isComplete + "; id: " + id);
    $http.put(`${url}/${id}`, { isComplete: $scope.isComplete });
    console.log(`Your work id ${id} is change!`);
  };
});

//-------------------------------------
// Tdo do detail controller
app.controller(
  "todoDetailCtrl",
  function ($scope, $http, $stateParams, $rootScope) {
    $http({
      url: "https://62e524cc20afdf238d77fb98.mockapi.io/todo/todos",
      method: "get",
      params: { id: $stateParams.id },
    }).then(function (respone) {
      console.log(respone.data[0]);
      $scope.todo = respone.data[0];
    });

    $scope.UpdateData = function (id) {
      var updateUrl = `${url}/${id}`;

      $http
        .put(updateUrl, {
          title: $scope.todo.title,
          discription: $scope.todo.discription,
          isComplete: JSON.parse($scope.todo.isComplete),
          dueDate: $scope.todo.dueDate,
        })
        .then(function (respone) {
          console.log("Update completed");
          console.log(respone.data.isComplete);
        });
    };
    // Clear text
    $scope.clear = function () {
      $scope.todo.title = "";
      $scope.todo.discription = "";
      $scope.todo.isComplete = "";
    };
  }
);

//-------------------------------------
// Directive
app.directive("todoDetail", function () {
  return {
    restrict: "E",
    templateUrl: "./component/todo.html",
  };
});
