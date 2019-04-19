import React, { Component } from "react";
import logo from "./../../assets/img/thor.png";
import verifiedlogo from "./../../assets/img/verified-icon.png";
import arrow from "./../../assets/img/drop-arrow.png";
import "./Reply.css";

class Reply extends Component {
  render() {
    return (
      <div className="reply">
        <div style={style.header} className="reply-header">
        <div className="imageDiv">
        <img
            src={logo}
            alt="Logo"
            className="reply-left"
            style={style.icon}
          />
        </div>
          
          <div className="reply-middle">
            <div className="reply-nameDiv">
              <p className="reply-name">Thor</p>
            </div>
            <div className="reply-certifiedlogo">
              <img src={verifiedlogo} className="reply-verified" />
            </div>
            <p className="reply-username">@NikleCurrent</p>
            <div>
              <p className="reply-to">Replying to @JaaduKiMosi</p>

              <div className="reply-message">
                Tu cheez original hai,
                <br />
                baaki sab duplicate hain.
                <br />
                Teri Haan ka tha intezaar tha,
                <br />
                ab toh nikaalwaani shaadi ki date hai.
                <br />
              </div>
              <div className="reply-tool-kit" />
            </div>
          </div>

          <img className="reply-right" src={arrow} />
        </div>
      </div>
    );
  }
}

const style = {
  header: {
    width: "340px",
    // backgroundColor: "#eaebed",
    padding: "0px 10px 0"
  },
  icon: {
    width: "50px",
    height: "50px",
    borderRadius: "50%"
  }
};
export default Reply;
