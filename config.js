import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

    apiKey: "AIzaSyCemZkG7zRzo54P31MBKP2d1YvBGQGWh6M",
    authDomain: "team-voting-cbbee.firebaseapp.com",
    projectId: "team-voting-cbbee",
    storageBucket: "team-voting-cbbee.appspot.com",
    messagingSenderId: "6733689714",
    appId: "1:6733689714:web:8656da253554cdf81d63eb",
    measurementId: "G-JQ9257H8BW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();