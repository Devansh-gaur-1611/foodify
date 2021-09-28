import React from "react";
import Restaurant from "./components/Basics/Restaurant";
import Contact_Us from "./components/Contact_Us/Contact_Us";
import MainNavBar from "./components/Main_NavBar/MainNavBar";
import SignIn from "./components/Login/SignIn";
import SignUp from "./components/Login/SignUp";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <MainNavBar />
      <Route path="/foodify/" exact component={Restaurant} />
      <Route path="/foodify/contact" exact component={Contact_Us} />
      <Route path="/foodify/signIn" exact component={SignIn} />
      <Route path="/foodify/signUp" exact component={SignUp} />
    </>
  );
};

export default App;
