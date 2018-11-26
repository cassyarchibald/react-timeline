import React, { Component } from "react";
import "./App.css";
import "./data/timeline.json";
import timelineData from "./data/timeline.json";
import TimelineEvent from "./components/TimelineEvent";
import Timestamp from "./components/Timestamp";
import Timeline from "./components/Timeline";

class App extends Component {
  render() {
    // Customize the code below
    // Will pass the timeline e ents to the Timeline component
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <TimelineEvent
          person="Cassy"
          statusMessage="Active"
          timestamp={"Test"}
        />

        <main className="App-main" />
      </div>
    );
  }
}

export default App;
