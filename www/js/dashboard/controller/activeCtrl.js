
angular.module('dashboard.module')
.controller('ActiveCtrl', function($scope, $location,$http,$stateParams ) {

$scope.claims = [{val : 1}];

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
