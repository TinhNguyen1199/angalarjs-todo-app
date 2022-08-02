app.filter("statusFilter", function () {
  return function (input) {
    if (input == true) return "Completed";
    else return "In proress";
  };
});
