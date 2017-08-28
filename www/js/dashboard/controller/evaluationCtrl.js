angular.module('dashboard.module')
.controller('evaluationCtrl', function($scope,$ionicTabsDelegate,$timeout) {
console.log("323r223r23r23r23r23r23r23r");
  $scope.checkTab = function(){
    var active = $ionicTabsDelegate.selectedIndex();
    console.log("dede");
    console.log(active);
    if (active === 0){
      $scope.doRefresh();
    }
    else{
      $ionicTabsDelegate.select(0);
    }
  }

  $scope.doRefresh = function() {

    console.log('Refreshing!');
    $timeout( function() {
      //simulate async response
      $scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);

      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');

    }, 1000);

  };
});
