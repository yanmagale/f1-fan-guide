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
          <h2>Drivers</h2>
          <div style={style.container}>
            {this.state.drivers.map((driver, key) => ( 
              <Driver
                key={key} 
                code={driver.code} 
                givenName={driver.givenName}
                familyName={driver.familyName}
                number={driver.permanentNumber}
                url={driver.url}>
              </Driver>
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
}

function Driver(props) {
  return (
    <div 
      style={style.driver}>
      <div style={style.informationNumber}>{props.number}</div>
      <div style={style.information}>{props.givenName} {props.familyName} </div>
      <div 
        style={style.informationUniversalCode}
        onClick={() => window.open(props.url, 'blank')}>
          {props.code}
      </div>
    </div>
  );
}

const style = {
  container: {
    display: 'grid',
    gridTemplateColumns: '150px 150px 150px 150px',
    gridGap: '20px'
  },
  driver: {
    padding: `10px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'spaceBetween',
    flexDirection: 'column',
    width: '150px',
    lineHeight: '1.8'
  },
  information: {
    width: '100%',
    textAlign: 'center'
  },
  informationUniversalCode: {
    width: '100%',
    cursor: 'pointer',
    textAlign: 'center' 
  },
  informationNumber: {
    width: '100%',
    textAlign: 'right'
  }
}


export default App;
