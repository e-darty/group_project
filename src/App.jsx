import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Login from "./components/Login"
import Contact from "./components/ContactUs"
import CINComponent from "./components/cin.jsx"
import DriveComponent from "./components/permis.jsx";
import GreyComponent from "./components/cgrise.jsx"
import axios from "axios";
import SignUp from "./components/SignUp.jsx"
import Extrait from "./components/Extrait"
import Declaration from "./components/Declaration"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "home",
      loggedin: true
    };

    this.changeView = this.changeView.bind(this);

  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }


  renderView() {
    const { view } = this.state;
    const { loggedin } = this.state;

    if (view === "home") {
      return <Home  />;
    } else if(view ==="contact"){
      return <Contact/>
    } else if(view === "cin" && loggedin){
      return <CINComponent/>
    } else if(view === "driving" && loggedin){
      return <DriveComponent/>
    } else if(view === "grey" && loggedin){
      return <GreyComponent/>
    } else if (view === "about") {
      return <SignUp/>
    } else if (view === "extrait" && loggedin){
      return <Extrait/>
    } else if (view === "declaration" && loggedin){
      return <Declaration/>
    } else {
      return <Login/>}
  }
  render() {
    return (
      <div>
        <div className="nav">
       <Navbar changeView={this.changeView}/>
        </div>

        <div className="main">{this.renderView()}</div>
      </div>
    );
  }
}

export default App;
