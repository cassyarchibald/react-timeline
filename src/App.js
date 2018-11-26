import React, { Component } from "react";
import "./App.css";
import timelineData from "./data/timeline.json";
import Timestamp from "./components/Timestamp";
import Timeline from "./components/Timeline";
const testTimelineData = {
  person: "Cassy",
  status: "Active",
  timestamp: Timestamp
};
class App extends Component {
  render() {
    console.log(testTimelineData);
    console.log(timelineData);

    // Customize the code below
    // Will pass the timeline e ents to the Timeline component
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main" />
      </div>
    );
  }
}

export default App;
