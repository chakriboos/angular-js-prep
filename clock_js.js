var app = angular.module("a1", []);
      app.controller('MyController', function ($scope) {
        $scope.clock = new Date();
        var updateClock = function() {
          $scope.clock = new Date();
        };
        setInterval(function() {
          $scope.$apply(updateClock);
        }, 1000);
        updateClock();
      });