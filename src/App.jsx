import React from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Contact from "./components/ContactUs";
import Admin from "./components/Admin";
import AddUser from "./components/AddUser";
import Services from "./components/Services";
import About from "./components/About";
import Messages from "./components/Messages";
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

      messages: {},


    };

    this.changeView = this.changeView.bind(this);
    this.updateUsers = this.updateUsers.bind(this);
    this.updateMessages = this.updateMessages.bind(this);
  }
  updateUser(data) {
    this.setState({
      isAuthenticated: true,
      user: data.user,
    });
  }

  fetchData() {
    let one = "http://localhost:3001/api/messages";
    let two = "http://localhost:3001/api/user";
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          console.log(responses[0].data);
          console.log(responses[1].data);
          const responseOne = responses[0].data;
          const responseTwo = responses[1].data;
          this.setState({
            messages: responseOne,
            user: responseTwo,
          });
        })
      )
      .catch((errors) => {
        console.log(errors);
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
  updateMessages(newmessage) {
    let newMessage = this.state.messages;
    newMessage.unshift(newMessage);
    this.setState({
      messages: newMessage,
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
    } else if (view === "add") {
      return <AddUser />;
    } else if (view === "services") {
      return <Services />;
    } else if (view === "about") {
      return <About />;
    } else if (view === "messages") {
      return <Messages messages ={this.state.messages}/>;

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
