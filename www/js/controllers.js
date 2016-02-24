angular.module('starter.controllers', [])


.controller('HomeCtrl', function($scope, $state, $ionicHistory) {

  $ionicHistory.clearHistory();

  $scope.newParty = function (id) {
      $state.go('newParty');
  };

  $scope.myActiveSlide = 1;

  $scope.slideHasChanged = function(index){
    if (index == 0) {
      $state.go('newParty', {}, {reload: true});
    }
  }

})

.controller('newPartyCtrl', function($scope, $state, $ionicHistory) {
  $ionicHistory.clearHistory();

  $scope.newParty = function (id) {
      $state.go('newParty');
  };

  $scope.myActiveSlide = 1;

  $scope.slideHasChanged = function(index){
    if (index == 0) {
      $state.go('home', {}, {reload: true});
    }
  }
})

.controller('PartyCtrl', function($scope, $ionicHistory) {
  //$ionicHistory.clearHistory()
});
