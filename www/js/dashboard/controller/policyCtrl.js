angular.module('dashboard.module')
.controller('policyCtrl', function($scope,$http,$location, $stateParams,claimStorage) {
  console.log("dilwef");
  console.log($stateParams.oid);
var url = "http://localhost:3000/users/4/claims";
$scope.submitClaim = function(claim, insurance_company){
console.log('gege');
console.log($stateParams.oid);
if($stateParams.oid == 0){
method = "POST"
} else {
url = "http://localhost:3000/users/4/claims/"+$stateParams.oid;
method = "PUT"
}
  $http({
    method: method,
    data: {
    claim: {id: $stateParams.oid, number: '123', type_of_damage: 'Water Loss', loss_date: '10-05-2017'}, insurance_company: {name: 'Insurance 1', phone: '9999999999', fax: 'Fax', contact_name: 'Adjuster', contact_phone: '9999999999', contact_email: 'email@email.com', address: 'Address', city: 'City', state: 'IL', zip: '12345'}, policy_holder: {name: 'Policy Holder', address: 'Address', city: 'City', state: 'IL', zip: '12345', day_time_phone: '1111111111', night_time_phone: '2222222222'}
    },
    url: url,
    headers: {
      'Authorization' : 'Token token=Obf3czsWCpCju7ENu66iyAtt',
      'Access-Control-Allow-Origin' : '*'
    }
  }).then(function(response) {
    console.log(response);
    console.log(response.data);
//user.setUser(response.data.user);
//console.log(user.getUser().name);
         $location.path('/dashboard/active');
      },function(err){
       console.log("error");
//         $location.path('/dashboard');
      });
}

var editUrl = "http://ncc-api-pg-prod.rud4nwv3nb.us-east-1.elasticbeanstalk.com/insurances/1/claims/";
 $scope.items = [{
        value: 'Water Loss',
        label: 'Water Loss'
      }, {
        value: 'Fire Loss',
        label: 'Fire Loss'
      }];
$scope.state = [];

if($stateParams.oid != 0)
{
  claimStorage.setClaimId($stateParams.oid);
  claimStorage.setClaimNumber($stateParams.number);
  console.log(claimStorage.getClaimId());
  console.log(claimStorage.getClaimNumber());
  var id =  $stateParams.oid.toString();
  var oid = {id :id }
//  var editUrl = "http://ncc-api-pg-prod.rud4nwv3nb.us-east-1.elasticbeanstalk.com/insurances/1/claims/"+ id;
  var editUrl = "http://localhost:3000/users/4/claims/1126";

      $http({
      method: "GET",
      url: editUrl,
      data: oid,
      headers: {
        'Authorization' : 'Token token=Obf3czsWCpCju7ENu66iyAtt'
      }
      }).then(function(response) {
              $scope.items.push({id : 0,
                   label : response.data.data.attributes['type-of-damage']
               });
              $scope.details  =  {claim : {
                 //type_of_damage :$scope.items[0].label,
                 claim_number :response.data.data.attributes.number,
                 lossDate :response.data.data.attributes['loss-date']
                }};
              console.log($scope.details);
              //Get the insurance company
//               var insuranceUrl = "http://ncc-api-pg-prod.rud4nwv3nb.us-east-1.elasticbeanstalk.com/insurances/"+response.data.data.relationships.insurance.data.id;
               var insuranceUrl = "http://localhost:3000/insurances/"+response.data.data.relationships.insurance.data.id;

               $http({
                    method: "GET",
                    url: insuranceUrl,
                    headers: {
                      'Authorization' : 'Token token=Obf3czsWCpCju7ENu66iyAtt'
                    }

      }).then(function(response){
            console.log(response);
           $scope.insurance_company = {
            name : response.data.data.attributes.name,
            phone_number : response.data.data.attributes.phone,
            fax : response.data.data.attributes.fax,
            address : response.data.data.attributes.address,
            city : response.data.data.attributes.city,
            state : response.data.data.attributes.state,
            zip : response.data.data.attributes.zip,
            ceil_number : response.data.data.attributes['contact-phone'],
            email : response.data.data.attributes['contact-email'],

           }
           $scope.zip =[];
           $scope.zip.push({id: 0,
                  label: response.data.data.attributes.zip,
             })

              $scope.city =[];
           $scope.city.push({id: 0,
                  label: response.data.data.attributes.city,
             })
            $scope.details1= {
                     policy_holder : {
                      name : response.data.data.attributes['contact-name'],
                      day_time_phone_number : response.data.data.attributes['contact-phone']

                     }
            }

             $scope.state.push({id : 0,
                             label : response.data.data.attributes.state
                         });

      },function(response){
      })
      console.log(response);
      })
}
else {

  console.log(":gere");
}
})
