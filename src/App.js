import React, { Component } from "react";

import "./App.css";
import Tweet from "./components/Tweet/Tweet";
import Reply from "./components/Reply/Reply";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tweet />
        <hr />
        <Reply />

        <Reply />
      </div>
    );
  }
}

export default App;
