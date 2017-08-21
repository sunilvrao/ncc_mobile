angular
  .module('dashboard.module')
  .config(function config($stateProvider) {
    $stateProvider
        .state('dashboard', {
              url: "/dashboard",
              templateUrl: 'templates/dashboard/dashboard.html',
              controller: 'dashboardCtrl'
          })
              .state('dashboard.active', {
                 url: '/active',
                  views: {
                           'active': {
                             templateUrl:  'templates/active.html',
                             controller: 'ActiveCtrl'
                           }
                         }

             })
              .state('dashboard.submitted', {
                 url: '/submitted',
                  views: {
                           'submitted': {
                             templateUrl:  'templates/submitted.html',
                             controller: 'submittedCtrl'
                           }
                         }

             })
             .state('dashboard.closed', {
                 url: '/closed',
                  views: {
                           'closed': {
                             templateUrl:  'templates/closed.html',
                             controller: 'closedCtrl'
                           }
                         }

             })
  });
