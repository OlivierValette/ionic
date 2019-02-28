// Ionic Starter App

var app = angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform, $rootScope, monApi) {

  // Initilisation API
  monApi.set("https://restcountries.eu/rest/v2");

  $ionicPlatform.ready(function() {

    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
    url: '/browse',
    views: {
      'menuContent': {
        templateUrl: 'templates/browse.html'
      }
    }
  })

  .state('app.puces', {
    url: '/puces/:txtPays',
    views: {
      'menuContent': {
        templateUrl: 'templates/puces.html',
        controller: 'PucesCtrl'
      }
    }
  })

  .state('app.puce', {
    url: '/puce/:idPays',
    views: {
      'menuContent': {
        templateUrl: 'templates/puce.html',
        controller: 'PuceCtrl'
      }
    }
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/puces/viewAll');

});
