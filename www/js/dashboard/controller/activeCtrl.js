
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
  var url = "http://ncc-api-pg-prod.rud4nwv3nb.us-east-1.elasticbeanstalk.com/insurances/1/claims";
  $http({
  method: "GET",
  url: url,
  headers: {
    'Authorization' : 'Token token=OSTpkT61NTQENaeJQplBIgtt'
  }
}).then(function(response) {
     console.log(response);
    angular.forEach(response.data.data, function(item){
    $scope.claims.push(item);
//    console.log($scope.claims);
    });
});
})
