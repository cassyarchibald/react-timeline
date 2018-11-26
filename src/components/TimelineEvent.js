import React from "react";
import "./TimelineEvent.css";
import Timestamp from "./Timestamp";

const TimelineEvent = props => {
  // Fill in your code here
  // Will take an timeline event data and render it
  // person, status message, timestamp (component)
  return (
    <section>
      <h2>{props.person}</h2>
      <p>{props.statusMessage}</p>
      <p>{props.timestamp}</p>
    </section>
  );
};

export default TimelineEvent;
