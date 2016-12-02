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
});
