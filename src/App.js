import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Travel
          destination="Fort de France"
          country="Martinique"
          photo="https://www.alibabuy.com/photos/library/1500/10141.jpg"
          distance="6545 km"
        />
        <Travel
          destination="La Havane"
          country="Cuba"
          photo="https://static.service-voyages.com/photos/circuit-cuba/la-havane/rue-a-cuba_440296_pgbighd.jpg"
          distance="7546 km"
        />
      </div>
    );
  }
}

export default App;
