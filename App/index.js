import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import firebase from 'firebase';

import Home from './Container/Home';

//extended stylesheet er lagt inn ved forsøk på styling, per dags dato ikke i bruk.
EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
  
    $white: '#FFFFFF',
    $lightGray: '#F0F0F0',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $darkText: '#343434',
  });

  
  export default class App extends React.Component {

    //Konfigurer applikasjonen til firebase.
    UNSAFE_componentWillMount() {
       const firebaseConfig = {
        apiKey: "AIzaSyC-9ZXi2n1n5mM2KdPgCJ_794Kk0cMx9ds",
        authDomain: "oblig-c5785.firebaseapp.com",
        databaseURL: "https://oblig-c5785.firebaseio.com",
        projectId: "oblig-c5785",
        storageBucket: "oblig-c5785.appspot.com",
        messagingSenderId: "171436974727",
        appId: "1:171436974727:web:7f998de8d8ead4500e8e22",
        measurementId: "G-MTEG5B1XP0"
   
       };
   
       // Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
       // Så undgår vi fejlen Firebase App named '[DEFAULT]' already exists (app/duplicate-app).
       if (firebase.apps.length ===0 ) {
       firebase.initializeApp(firebaseConfig);
   }
   
    }
     render() {
   //Henter navigasjons meny fra Home.js
       return <Home />;
     }
   }
   

