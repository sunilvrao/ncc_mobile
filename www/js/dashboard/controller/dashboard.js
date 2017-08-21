angular
  .module('dashboard.module')
  .controller('dashboardCtrl', function($scope, $state, $ionicPlatform, $location, $ionicHistory, $cordovaImagePicker,$cordovaCamera,$ionicFilterBar) {
 $scope.logOut = function(){
 $location.path('/login');
 }

  $scope.showFilterBar = function () {
     var filterBarInstance = $ionicFilterBar.show({
       cancelText: "<i class='ion-ios-close-outline'></i>",
       items: $scope.places,
       update: function (filteredItems, filterText) {
         $scope.places = filteredItems;
       }
     });
   };

 $scope.buttons = [
     {text: 'Priority'},
     {text: 'Date'},
   ];
   $scope.activeButton = 0;
   $scope.setActiveButton = function(index) {
     $scope.activeButton = index;
   };


 $ionicPlatform.registerBackButtonAction(function() {
 //var path = $location.path()
   if ($location.path() === "/dashboard" || $location.path() === "dashboard") {
     navigator.app.exitApp();
   }
   else {
     $ionicHistory.goBack();
     //navigator.app.goBack();
   }
 }, 100);


 $scope.data = { "ImageURI" :  "Select Image" };
   $scope.selectPicture = function() {
     console.log($scope.imgData);
     console.log('dfnbuigewfiwue')
 		var options = {
 			quality: 50,
 			destinationType: Camera.DestinationType.FILE_URI,
 			sourceType: Camera.PictureSourceType.PHOTOLIBRARY
 		};

 	  $cordovaCamera.getPicture(options).then(
 		function(imageURI) {
 			window.resolveLocalFileSystemURI(imageURI, function(fileEntry) {
 				$scope.picData = fileEntry.nativeURL;
 				$scope.ftLoad = true;
 				var image = document.getElementById('myImage');
 				image.src = fileEntry.nativeURL;
   			});
 			$ionicLoading.show({template: 'Foto acquisita...', duration:500});
 		},
 		function(err){
 			$ionicLoading.show({template: 'Errore di caricamento...', duration:500});
 		})
 	};


 $scope.edit = 1;
 $scope.edit1 = 0;
 $scope.editor = function(){
 console.log($scope.edit);
 $scope.edit = 0;
 }
 $scope.save = function(){
 console.log($scope.edit);
 $scope.edit = 1;
 }
 console.log("dashboard");
 $scope.clicked = function(num) {
     $scope.var = num;
 }
     // Initialize collapse button
     function ContentController($scope, $ionicSideMenuDelegate) {
       $scope.toggleLeft = function() {
         $ionicSideMenuDelegate.toggleLeft();
       };
     }
  });

