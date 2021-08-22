import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


import firebaseConfig from "./firebase";
// this is the firebase config which we get when we make a database for our app
// also firebase is preferred because it is a real time data base so that if the state is changed heavily in future
// then those can be done directly in the database and correspondingly everywhere,where the app in open refreshing takes
// place automatically when we define the listener in are app namely onSnapshot


//here we added the app component inside the div with id root
ReactDOM.render(<App />, document.getElementById("root"));
