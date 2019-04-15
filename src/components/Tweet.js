import React, { Component } from "react";
import logo from "./../assets/img/captain-marvel.png";
import verifiedlogo from "./../assets/img/verified-icon.png";
import arrow from "./../assets/img/drop-arrow.png";
import "./Tweet.css";

class Tweet extends Component {
  state = { age: 22 };
  click() {
    console.log(this);
    console.log("hello");
  }
  render() {
    // this.click();
    return (
      <div>
        <div style={style.header} className="header" onClick={this.click}>
          <img src={logo} alt="Logo" className="left" style={style.icon} />
          <div className="middle">
            <div className="nameDiv">
              <p className="name">Captain Marvel</p>
            </div>
            <div className="certifiedlogo">
              <img src={verifiedlogo} className="verified" />
            </div>
            <p className="username">@JaaduKiMosi</p>
          </div>
         
            <img className='right' src={arrow} />
          
        </div>
        <div className="message">
          Aayi thi ladne Thanos se,
          <br />
          mager ho gya mujhe Pyaar.
          <br />
          Ab toh shaadi krungi Thor se, <br />
          or basaungi ghar parivaar.
          <br />
        </div>
      </div>
    );
  }
}

const style = {
  header: {
    width: "340px",
    backgroundColor: "#eaebed",
    padding: "10px 10px 0"
  },
  icon: {
    width: "50px",
    height: "50px",
    borderRadius: "50%"
  }
};
export default Tweet;
