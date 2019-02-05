import React, { Component } from 'react';
import f1 from "f1-stats/f1-stats.js";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      drivers: []
    }
  }

  componentDidMount() {
    this.getDrivers();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">F1 Fan Guide</h1>
          <div>
            {this.state.drivers.map(driver => (
              <div>
                {driver.code} - {driver.familyName}
              </div>  
            ))}
          </div>

        </header>
      </div>
    );
  }

  getDrivers() {
    f1("2018 drivers", (res) => {
      const {Drivers} = res.MRData.DriverTable;
      this.setState({ drivers: Drivers });
      console.log(this.state.drivers);
    });
  }

  getConstructors() {
    f1("2018 constructors", (res) => {
      const {Constructors} = res.MRData.ConstructorTable;
      console.log(Constructors);
    });
  }

  getNextRaceInformation() {
    f1("current next", (res) => {
      const {Races} = res.MRData.RaceTable;
      console.log(Races);
    });
  }
}

export default App;
