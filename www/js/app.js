// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','dashboard.module', 'starter.services','url.constants','ngCordova','jett.ionic.filter.bar'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova .statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

$ionicConfigProvider.backButton.previousTitleText(false);
$ionicConfigProvider.backButton.icon('ion-chevron-left');
  $ionicConfigProvider.backButton.text('')
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tab-dash.html',
    controller : 'DashCtrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('login', {
      url: "/login",
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
  })
//  .state('dashboard', {
//        url: "/dashboard",
//        templateUrl: 'templates/dashboard/dashboard.html',
//        controller: 'dashboardCtrl'
//    })


   .state('editClaim', {
          url: '/dashboard/editClaim',
          templateUrl: 'templates/editClaim.html',
          controller: 'editClaimCtrl'


      })

       .state('editClaim.policy', {
          url: '/policy/:oid',
          views: {
            'help-policy': {
              templateUrl:  'templates/policy.html',
              controller: 'policyCtrl'
            }
          }
        })



           .state('editClaim.evaluation', {
          url: '/evaluation',
          views: {
            'evaluation': {
              templateUrl:  'templates/evaluation.html',
              controller: 'evaluationCtrl1'
            }
          }
        })
        .state('editClaim.evaluation.cabinet', {
          url: '/cabinet',
          views: {
            'cabinet': {
              templateUrl:  'templates/cabinet.html',
              controller: 'cabinetCtrl'
            }
          }
        })
        .state('editClaim.evaluation.accessory', {
          url: '/accessory',
          views: {
            'accessory': {
              templateUrl:  'templates/accessory.html',
              controller: 'accessoryCtrl'
            }
          }
        })
     .state('editClaim.evaluation.counterSurface', {
          url: '/counterSurface',
          views: {
            'counterSurface': {
              templateUrl:  'templates/counterSurface.html',
              controller: 'counterSurfaceCtrl'
            }
          }
        })



  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

