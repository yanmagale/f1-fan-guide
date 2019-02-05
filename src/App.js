import React, { Component } from 'react';
import f1 from "f1-stats/f1-stats.js";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      drivers: [],
      constructors:[]
    }
  }

  componentDidMount() {
    this.getDrivers();
    this.getConstructors();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">F1 Fan Guide</h1>
          <div>
            <h2>Drivers</h2> 
            {this.state.drivers.map(driver => ( 
              <div>
              ({driver.code}) - {driver.givenName} {driver.familyName} {driver.permanentNumber}
              </div>  
            ))}
          </div>

          <div>
            <h2>Constructors</h2> 
            {this.state.constructors.map(constructor => ( 
              <div>
                {constructor.name}
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
    });
  }

  getConstructors() {
    f1("2018 constructors", (res) => {
      const {Constructors} = res.MRData.ConstructorTable;
      this.setState({ constructors: Constructors });
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
