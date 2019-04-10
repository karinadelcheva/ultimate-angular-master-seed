angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config( function($firebaseRefProvider) {
    var config = {
      apiKey: "AIzaSyBvpsRP2GIM6dMGNxImoDz95z0qTPJ9cRI",
      authDomain: "contacts-manager-fdf21.firebaseapp.com",
      databaseURL: "https://contacts-manager-fdf21.firebaseio.com",
      projectId: "contacts-manager-fdf21",
      storageBucket: "contacts-manager-fdf21.appspot.com",
      messagingSenderId: "463993708607"
    };
    $firebaseRefProvider.registerUrl({
      default: config.databaseURL,
      contacts: config.databaseURL + '/contacts'
    })
    firebase.initializeApp(config);
  });