angular.module('starter.services', [])

.factory('claimStorage', function() {
    var supervisorId= {};
    var parkingId = {};
     function setClaimId(data){
          parkingId = data;
      }
      function getClaimId(){
          return parkingId;
      }
      function setClaimNumber(data){
          supervisorId = data;
      }
      function getClaimNumber(){
          return supervisorId;
      }
         return {
              setClaimId : setClaimId,
              getClaimId : getClaimId,
              setClaimNumber : setClaimNumber,
              getClaimNumber : getClaimNumber

          }
});
