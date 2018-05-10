var database;
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDOgdMoNN06vf0RWp0l_iYRxwTqpRSjbp0",
  authDomain: "bank-c51e5.firebaseapp.com",
  databaseURL: "https://bank-c51e5.firebaseio.com/",
  projectId: "bank-c51e5",
  storageBucket: "bank-c51e5.appspot.com",
  messagingSenderId: "427893952621"
};
firebase.initializeApp(config);
database=firebase.database();
