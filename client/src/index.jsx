import React from "react";
import ReactDOM from "react-dom";
import HeaderEdarty from "./Components/header.jsx";
import Login from "./Components/login.jsx";
import CINComponent from "./Components/cin.jsx"
import DriveComponent from "./Components/permis.jsx";
import GreyComponent from "./Components/cgrise.jsx"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      viewop: 'cin'
  }
  this.changeView=this.changeView.bind(this);
}
changeView(option){
      this.setState({ viewop:option})
}
render(){
  if(this.state.viewop==='cin'){
      console.log(this.state.viewop)
      return (
          <div className="header">
          <a className="logo">e-darty</a>
    <div className="header-right">
      <a onClick={() => this.changeView('home')}>Home</a>
      <a  className="active" onClick={() => this.changeView('cin')} >CIN</a>
      <a  onClick={() => this.changeView('driving')} >Driving Licence</a>
      <a  onClick={() => this.changeView('greyCard')} >Grey Card</a>
      <a  onClick={() => this.changeView('contact')}>Contact</a>
        </div>
          <CINComponent/>
          </div>
      )
  } else if (this.state.viewop==='driving'){
      console.log(this.state.viewop)
      return (
        <div className="header">
          <a className="logo">e-darty</a>
    <div className="header-right">
      <a  onClick={() => this.changeView('home')}>Home</a>
      <a  onClick={() => this.changeView('cin')} >CIN</a>
      <a  className="active" onClick={() => this.changeView('driving')} >Driving Licence</a>
      <a  onClick={() => this.changeView('greyCard')} >Grey Card</a>
      <a  onClick={() => this.changeView('contact')}>Contact</a>
        </div>
          <DriveComponent/>
          </div>
      )
  } else if (this.state.viewop==='greyCard'){
      console.log(this.state.viewop)
      return (
        <div className="header">
          <a  className="logo">e-darty</a>
    <div className="header-right">
      <a  onClick={() => this.changeView('home')}>Home</a>
      <a  onClick={() => this.changeView('cin')} >CIN</a>
      <a  onClick={() => this.changeView('driving')} >Driving Licence</a>
      <a  className="active" onClick={() => this.changeView('greyCard')} >Grey Card</a>
      <a  onClick={() => this.changeView('contact')}>Contact</a>
        </div>
          <GreyComponent/>
          </div>
      )
  } else if (this.state.viewop==='contact'){
    console.log(this.state.viewop)
    return (
      <div className="header">
        <a  className="logo">e-darty</a>
  <div className="header-right">
    <a  onClick={() => this.changeView('home')}>Home</a>
    <a  onClick={() => this.changeView('cin')} >CIN</a>
    <a  onClick={() => this.changeView('driving')} >Driving Licence</a>
    <a  onClick={() => this.changeView('greyCard')} >Grey Card</a>
    <a  className="active" onClick={() => this.changeView('contact')}>Contact</a>
      </div>
        <ContactComponent/>
        </div>
    )
}
}
}

ReactDOM.render(<App />, document.getElementById("root"));
