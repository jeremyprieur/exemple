angular.module('starter.controllers', [])


.controller('HomeCtrl', function($scope, $state, $ionicHistory, $cordovaTouchID, $ionicPlatform) {
console.log('test');
console.log('test2');
console.log('test3');
  $ionicHistory.clearHistory();

  $ionicPlatform.ready(function() {
        $cordovaTouchID.checkSupport().then(function() {
            $cordovaTouchID.authenticate("You must authenticate").then(function() {
                alert("The authentication was successful");
            }, function(error) {
                alert(JSON.stringify(error));
            });
        }, function(error) {
            alert(JSON.stringify(error));
        });
    });

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
