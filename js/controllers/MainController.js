app.controller('MainController', function ($scope) {
  $scope.todos = [
    'Learn Angular',
    'Commit once a day',
    'Get a JavaScript tattoo'
  ];
  $scope.data = {};
  $scope.add = function() {
    console.log($scope.data.task.$modelValue);
    // $scope.todos.push($scope.newToDo);
    // console.log('i\'m trying');
  }
});
