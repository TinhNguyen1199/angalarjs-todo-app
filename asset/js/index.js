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
// app.run(function ($rootScope) {});

app.controller("appCtrl", function ($http, $scope, $rootScope) {
  $scope.title = null;
  $scope.discription = null;
  $scope.status = "In progress";
  $scope.dueDate = null;
  $scope.loading = false;
  $scope.todos = [];

  // Clear function
  $scope.clear = function () {
    $scope.title = "";
    $scope.discription = "";
    $scope.dueDate = null;
  };


  // Create
  $scope.SendData = function (title, dueDate) {
    $scope.loading = true;
    const today = new Date();
    
    $http
      .post(url, {
        title: title,
        status: today > dueDate ? "Completed" : "In progress",
        dueDate: dueDate,
        isCompleted: today > dueDate,
      })
      .then(function (respone) {
        console.log(respone);

        $scope.fetchData();
        $scope.clear();
        $scope.loading = false;
      });
  };

  // Delete
  $scope.DeleteData = function (id) {
    var updateUrl = `${url}/${id}`;
    let msg = "Are you sure to delete this item?";
    if (confirm(msg) == true) {
      $http.delete(updateUrl).then(function (respone) {
        console.log(respone);

        alert("Item has deleted Successfully");
        $scope.fetchData();
      });
    } else {
      console.log("You canceled!");
    }
  };
  //Get all todo list
  $scope.fetchData = function () {
    $http.get(url).then(function (respone) {
      $scope.todos = respone.data;
      console.log("fetch working", respone.data);
    });
  };

  $scope.fetchData();

  //Finished todo
  $scope.finished = function (id, status) {
    console.log("id", id);
    console.log("status", status);
    $scope.status = status == "Completed" ? "In progress" : "Completed";
    $scope.isCompleted = $scope.status === "Completed";
    console.log($scope.status)
    console.log($scope.isCompleted)

    console.log("Done: " + $scope.status + "; id: " + id);
    $http.put(`${url}/${id}`, { status: $scope.status, isCompleted: $scope.status === "Completed" });
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

    //Updat todo
    $scope.UpdateData = function (id) {
      var updateUrl = `${url}/${id}`;

      $http
        .put(updateUrl, {
          title: $scope.todo.title,
          discription: $scope.todo.discription,
          status: $scope.todo.status,
          dueDate: $scope.todo.dueDate,
          isCompleted: $scope.todo.status === "Completed",
        })
        .then(function (respone) {
          console.log($scope.todo.dueDate);
          console.log($scope.todo.status);
          alert("Update completed");
          console.log(respone.data.status.toString());
        });
    };
    // Clear text
    $scope.clear = function () {
      $scope.todo.title = "";
      $scope.todo.discription = "";
      $scope.todo.status = "";
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
