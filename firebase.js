  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAbTS2r5TMZqbxRm0JLjYsYrMHTJQMQ2Zs",
    authDomain: "battleship-b5405.firebaseapp.com",
    databaseURL: "https://battleship-b5405.firebaseio.com",
    projectId: "battleship-b5405",
    storageBucket: "battleship-b5405.appspot.com",
    messagingSenderId: "409726454947"
  };
  firebase.initializeApp(config);
  var database = firebase.database();