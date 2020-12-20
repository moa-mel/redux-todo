import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { rootReducer } from "./ducks/reducers";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyBaeCraPGrIP9Z4vPWAdK4UW1ewqWVxzCg",
    authDomain: "todoapp-68886.firebaseapp.com",
    projectId: "todoapp-68886",
    storageBucket: "todoapp-68886.appspot.com",
    messagingSenderId: "823013394529",
    appId: "1:823013394529:web:2183d1c1009ad0bf94c220"
};

const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true,
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const initialState = {};
const store = createStore(rootReducer, initialState);
// react-redux-firebase config
const rrfProps = {
  firebase,
  config: rrfConfig,
   // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);