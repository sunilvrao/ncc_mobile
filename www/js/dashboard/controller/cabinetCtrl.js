angular.module('dashboard.module')
.controller('cabinetCtrl', function($scope,$stateParams,$http,claimStorage) {

console.log("de");
   console.log(claimStorage.getClaimId());
 console.log(claimStorage.getClaimNumber());

if(!claimStorage.getClaimId())
{
var url = "http://ncc-api-pg-prod.rud4nwv3nb.us-east-1.elasticbeanstalk.com/insurances/1/claims/1/cabinets"
}
// else
// {
// console.log("dwygw");
// }
// $scope.buttons = [
//     {text: 'Kitchen1'},
//     {text: 'Kitchen2'} ];
//     $scope.activeButton = 0;
//     $scope.setActiveButton = function(index) {
//       $scope.activeButton = index;
//     };
// $scope.images = [1,2,3];
// console.log("world cup here we are");
// var editUrl = "http://ncc-api-pg-prod.rud4nwv3nb.us-east-1.elasticbeanstalk.com/insurances/1/claims/";
//   var id =  1;
//   var oid = 1;
//   $scope.oid = 1;


});
