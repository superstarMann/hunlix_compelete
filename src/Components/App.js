import React, { Component } from "react";
import Router from "./Router"
import GlobalSetting from "./GlobalSetting";

class App extends Component{
render(){
  return(
    <>
    <Router/>
    <GlobalSetting/>
    </>
  )
}
}
export default App;
