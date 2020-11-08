import React from "react"
import "../font-awesome/css/font-awesome.min.css"
import "../CSS/Header.css"
import UserData from "../Data/UserData.js"

class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      id: 0,
      name: "",
      profileImage: "",
    };
  }

  HandleState() {
    this.setState( (prevState)=> {
        return{
          
        }

     }
    
    )
  }

  render(){

    this.state = UserData[0]

    return (
        <div id="topnav">
            <i className="fa fa-star fa-lg" aria-hidden="true" id="logo">  SKILLY</i>
            <a id="name">{this.state.name}</a>
            <a id="profile"><img id="profile-image" src={this.state.profileImage} alt="your-image" /></a>
            <a id="notifications"><i className="fa fa-bell fa-lg" aria-hidden="true"></i></a>
            <a id="search"><i className="fa fa-search fa-lg" aria-hidden="true"></i></a>
        </div>
    )
  }
}
export default Header
