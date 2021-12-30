import React from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Login from "./components/Login"
import Contact from "./components/ContactUs"
import Admin from "./components/Admin"
import AddUser from "./components/AddUser"
import CINComponent from "./components/cin.jsx"
import DriveComponent from "./components/permis.jsx";
import GreyComponent from "./components/cgrise.jsx"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: "home",
      isAuthenticated: false,
      user: {},
      view: "cin",
    };

    this.changeView = this.changeView.bind(this);
    this.updateUsers = this.updateUsers.bind(this);
  }
  updateUser(data) {
    this.setState({
      isAuthenticated: true,
      user: data.user,
    });
  }
  fetchData() {
    axios.get("http://localhost:3001/api/user").then(({ data }) => {
      console.log(data);
      this.setState({
        user: data,
      });
    });
  }

  componentDidMount() {
    this.fetchData();
  }
  changeView(option) {
    this.setState({
      view: option,
    });
  }

  updateUsers(newuser) {
    let newUser = this.state.user;
    newUser.unshift(newuser);
    this.setState({
      user: newUser,
    });
  }

  renderView() {
    const { view, user } = this.state;

    if (view === "home") {
      return <Home />;
    } else if (view === "login") {
      return <Login />;
    } else if (view === "contact") {
      return <Contact />;
    } else if (view === "admin") {
      return <Admin user={user} changeView={this.changeView} />;
    }else if(view === "add"){
      return <AddUser />;
    }else if(view === "login"){
return <Login/>
    }else if(view ==="contact"){
      return <Contact/>
    } else if(view === "cin"){
      return <CINComponent/>
    } else if(view === "driving"){
      return <DriveComponent/>
    } else if(view === "grey"){
      return <GreyComponent/>
    }
  }
  render() {
    return (
      <div>
        <div className="nav">
          <Navbar changeView={this.changeView} />
        </div>

        <div className="main">{this.renderView()}</div>
      </div>
    );
  }
}

export default App;
