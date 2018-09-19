import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import f1 from "f1-stats/f1-stats.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">F1 Fan Guide</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.getDrivers}>Get Pilots </button>
        </p>
      </div>
    );
  }

  getDrivers() {
    f1("2018 drivers", (res) => {
      const {Drivers} = res.MRData.DriverTable;
      console.log(Drivers);
    });
  }
}

export default App;
