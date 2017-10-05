
angular.module('dashboard.module')
.controller('ActiveCtrl', function($scope, $location,$http,$stateParams,claimStorage ) {

$scope.claims = [{val : 1}];

//Store the claim no and id in case of edit claim
$scope.setClaimInfo = function(id, number){
  console.log(id);
  console.log(number);
  claimStorage.setClaimId(id);
  claimStorage.setClaimNumber(number);
  console.log(claimStorage.getClaimId());
  console.log(claimStorage.getClaimNumber());

}

// set id and number to null in case of new claim
$scope.unsetClaimInfo = function(){
  claimStorage.setClaimId();
  claimStorage.setClaimNumber();
  console.log("lala");
  console.log(claimStorage.getClaimId());
  console.log(claimStorage.getClaimNumber());

}
console.log("hehehehe");
  var url = "http://localhost:3000/users/4/claims";
  $http({
  method: "GET",
  url: url,
  headers: {
    'Authorization' : 'Token token=Obf3czsWCpCju7ENu66iyAtt'
  }
}).then(function(response) {
     console.log(response);
    angular.forEach(response.data.data, function(item){
    $scope.claims.push(item);
//    console.log($scope.claims);
    });
});
})
