app.controller('MainController', function ($scope) {
  $scope.todos = [
    'Learn Angular',
    'Commit once a day',
    'Get a JavaScript tattoo'
  ];
  $scope.task;
  $scope.add = function() {
    // console.log($scope.task);
    $scope.todos.push($scope.task);
  }

  $scope.done = function(todo) {
    var index = $scope.todos.indexOf(todo)
    $scope.todos.splice(index,1);
  }
});
