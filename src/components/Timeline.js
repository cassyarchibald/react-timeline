import React from "react";
import "./Timeline.css";
import TimelineEvent from "./TimelineEvent";

// const createTimeEventObjects = props => {
//   props.map((data, index) => {
//     return (
//       <TimelineEvent
//         person={data.person}
//         statusMessage={data.statusMessage}
//         timestamp={data.timeStamp}
//         key={index}
//       />
//     );
//   });
// };

const Timeline = props => {
  //   // Map through events
  console.log(props);
  console.log(props.events);
  const result = props.events.map((data, index) => {
    return (
      <TimelineEvent
        person={data.person}
        status={data.status}
        timestamp={data.timeStamp}
        key={index}
      />
    );
  });
  return result;
};
// // Fill in your code here
// Take a list of timeline events as a prop and render a list of TimelineEvent components

export default Timeline;
