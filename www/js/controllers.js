angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaImagePicker,$cordovaCamera, $ionicPlatform,$http,$location) {
 console.log('dhfvwyjefvw')
  var url = "http://ncc-api-pg-prod.rud4nwv3nb.us-east-1.elasticbeanstalk.com/insurances";
  $scope.user;
  $scope.signUpUser = function(user){
  console.log(user);
    console.log($scope.user);
    $http({
    method: "POST",
    data: user,
    url: url,
    headers: {
      'Authorization' : 'Token token=21SrQqpxUsP3yDHNncrXiAtt'
    }
  }).then(function(response) {
       $location.path('/login');
       console.log("dbfcywgedf");
      });

  }

})

.controller('loginCtrl', function($scope,$http,$location) {
console.log("we good");
var url = "http://ncc-api-pg-prod.rud4nwv3nb.us-east-1.elasticbeanstalk.com/login.json";
$scope.loginUser = function(user){
console.log('gege');
console.log(user);
console.log($scope.email);
console.log($scope.password);
  $http({
    method: "POST",
    data: {
    email:user.email,
    password:user.password
    },
    url: url,
    headers: {
      'Authorization' : 'Token token=21SrQqpxUsP3yDHNncrXiAtt'
    }
  }).then(function(response) {
    console.log(response)
         $location.path('/dashboard');
      },function(err){
       console.log("error");
         $location.path('/dashboard');
      });
}
})


.controller('cabinetCtrl', function($scope) {
$scope.buttons = [
    {text: 'Kitchen1'},
    {text: 'Kitchen2'},
  ];
    $scope.activeButton = 0;
    $scope.setActiveButton = function(index) {
      $scope.activeButton = index;
    };
$scope.images = [1,2,3];
console.log("world cup here we are");
})

.controller('accessoryCtrl', function($scope) {
$scope.images = [1,2,3];
console.log("world cup here we are3232");
})
.controller('counterSurfaceCtrl', function($scope) {
$scope.images = [1,2,3];
console.log("world cup here we are3232");
})

.controller('editClaimCtrl', function($scope, $ionicViewSwitcher,$ionicNavBarDelegate,$state,$timeout) {
console.log("we goo23121d");
$scope.$on('$ionicView.beforeEnter', function (event, viewData) {
  viewData.enableBack = true;
});
 $scope.goBack = function() {
   $ionicViewSwitcher.nextDirection("backward");
   $state.go('dashboard.active');
 };

$scope.user = 212;
$scope.items = [1,2,3,4,5,6];
$scope.go = function ( ) {
   // $location.path('/dashboard/editClaim/' + $scope.user);
  };
$scope.clicked = function(num) {
    $scope.var = num;
}

})

.filter('toDate', function() {
    return function(input) {
        return new Date(input);
    }
})

.controller('policyCtrl', function($scope,$http,$stateParams) {
var editUrl = "http://ncc-api-pg-prod.rud4nwv3nb.us-east-1.elasticbeanstalk.com/insurances/1/claims/";

 $scope.items = [{
        value: 'Water Loss',
        label: 'Water Loss'
      }, {
        value: 'Fire Loss',
        label: 'Fire Loss'
      }];
$scope.state = [];
if($stateParams.oid)
{
  console.log("oid")
  console.log($stateParams.oid);
  var id =  $stateParams.oid.toString();
  var oid = {id :id }
  var editUrl = "http://ncc-api-pg-prod.rud4nwv3nb.us-east-1.elasticbeanstalk.com/insurances/1/claims/"+ id;
}
      $http({
      method: "GET",
      url: editUrl,
      data: oid,
      headers: {
        'Authorization' : 'Token token=OSTpkT61NTQENaeJQplBIgtt'
      }
      }).then(function(response) {
              $scope.items.push({id : 0,
                   label : response.data.data.attributes['type-of-damage']
               });
              $scope.details  =  {claim : {
                 //type_of_damage :$scope.items[0].label,
                 claim_number :response.data.data.attributes['number'],
                 lossDate :response.data.data.attributes['loss-date']
                }};
              console.log($scope.details);
              //Get the insurance company
               var insuranceUrl = "http://ncc-api-pg-prod.rud4nwv3nb.us-east-1.elasticbeanstalk.com/insurances/"+response.data.data.relationships.insurance.data.id;

               $http({
                    method: "GET",
                    url: insuranceUrl,
                    headers: {
                      'Authorization' : 'Token token=OSTpkT61NTQENaeJQplBIgtt'
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
            $scope.details= {
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
})


.controller('evaluationCtrl1', function($scope) {
console.log("323r223r23r23r23r23r23r23r");
})


//.controller('dashboardCtrl', function($scope, $state, $ionicPlatform, $location, $ionicHistory, $cordovaImagePicker,$cordovaCamera,$ionicFilterBar) {
//
//$scope.logOut = function(){
//$location.path('/login');
//}
//
// $scope.showFilterBar = function () {
//    var filterBarInstance = $ionicFilterBar.show({
//      cancelText: "<i class='ion-ios-close-outline'></i>",
//      items: $scope.places,
//      update: function (filteredItems, filterText) {
//        $scope.places = filteredItems;
//      }
//    });
//  };
//
//$scope.buttons = [
//    {text: 'Priority'},
//    {text: 'Date'},
//  ];
//  $scope.activeButton = 0;
//  $scope.setActiveButton = function(index) {
//    $scope.activeButton = index;
//  };
//
//
//$ionicPlatform.registerBackButtonAction(function() {
////var path = $location.path()
//  if ($location.path() === "/dashboard" || $location.path() === "dashboard") {
//    navigator.app.exitApp();
//  }
//  else {
//    $ionicHistory.goBack();
//    //navigator.app.goBack();
//  }
//}, 100);
//
//
//$scope.data = { "ImageURI" :  "Select Image" };
//  $scope.selectPicture = function() {
//    console.log($scope.imgData);
//    console.log('dfnbuigewfiwue')
//		var options = {
//			quality: 50,
//			destinationType: Camera.DestinationType.FILE_URI,
//			sourceType: Camera.PictureSourceType.PHOTOLIBRARY
//		};
//
//	  $cordovaCamera.getPicture(options).then(
//		function(imageURI) {
//			window.resolveLocalFileSystemURI(imageURI, function(fileEntry) {
//				$scope.picData = fileEntry.nativeURL;
//				$scope.ftLoad = true;
//				var image = document.getElementById('myImage');
//				image.src = fileEntry.nativeURL;
//  			});
//			$ionicLoading.show({template: 'Foto acquisita...', duration:500});
//		},
//		function(err){
//			$ionicLoading.show({template: 'Errore di caricamento...', duration:500});
//		})
//	};
//
//
//$scope.edit = 1;
//$scope.edit1 = 0;
//$scope.editor = function(){
//console.log($scope.edit);
//$scope.edit = 0;
//}
//$scope.save = function(){
//console.log($scope.edit);
//$scope.edit = 1;
//}
//console.log("dashboard");
//$scope.clicked = function(num) {
//    $scope.var = num;
//}
//    // Initialize collapse button
//    function ContentController($scope, $ionicSideMenuDelegate) {
//      $scope.toggleLeft = function() {
//        $ionicSideMenuDelegate.toggleLeft();
//      };
//    }
//
//  })

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
