import React from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Login from "./components/Login"
import Contact from "./components/ContactUs"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "home",
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

    if (view === "home") {
      return <Home  />;
    }else if(view === "login"){
return <Login/>
    }else if(view ==="contact"){
      return <Contact/>
    }
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
