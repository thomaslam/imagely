// (function() {

angular.module('imagely', [])
  .controller('MainController', ['$scope', '$location', MainController]);

function MainController($scope, $location) {
  $scope.stuff = "angular stuff";
}
// })();
