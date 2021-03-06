'use strict';

/**
 * @ngdoc function
 * @name experimentalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the experimentalApp
 */
angular.module('myTodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];
    $scope.addTodo = function () {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
    };
    $scope.removeTodo = function(index) {
        $scope.todos.splice(index, 1);
    }
  });
