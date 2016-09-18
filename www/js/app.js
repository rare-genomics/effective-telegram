// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
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
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
          // controller: 'HomeCtrl'
        }
      }
    })
    .state('app.news', {
      url: '/news',
      views: {
        'menuContent': {
          templateUrl: 'templates/news.html'
          // controller: 'NewsCtrl'
        }
      }
    })
    .state('app.patients', {
      url: '/patients',
      views: {
        'menuContent': {
          templateUrl: 'templates/patients.html'
          // controller: 'PatientsCtrl'
        }
      }
    })
    .state('app.news-article', {
      url: '/news-article',
      views: {
        'menuContent': {
          templateUrl: 'templates/news-article.html'
          // controller: 'PatientsCtrl'
        }
      }
    })
    .state('app.patient-details', {
      url: '/patient-details',
      views: {
        'menuContent': {
          templateUrl: 'templates/patient-details.html'
          // controller: 'PatientsCtrl'
        }
      }
    })
    .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html'
          // controller: 'PatientsCtrl'
        }
      }
    })
    .state('app.donations', {
      url: '/donations',
      views: {
        'menuContent': {
          templateUrl: 'templates/donations.html'
          // controller: 'PatientsCtrl'
        }
      }
    })
    .state('app.general-donate', {
      url: '/general-donate',
      views: {
        'menuContent': {
          templateUrl: 'templates/general-donate.html'
          // controller: 'PatientsCtrl'
        }
      }
    })
    .state('app.patient-donate', {
      url: '/patient-donate',
      views: {
        'menuContent': {
          templateUrl: 'templates/patient-donate.html'
          // controller: 'PatientsCtrl'
        }
      }
    })
    .state('app.campaign-champion', {
      url: '/campaign-champion',
      views: {
        'menuContent': {
          templateUrl: 'templates/campaign-champion.html'
          // controller: 'PatientsCtrl'
        }
      }
    })
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
