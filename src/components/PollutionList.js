import React from "react";

const PollutionList = props => {
  const measurements = props.measurements.map((measurement, index) => (
    <li key={index}>{measurement.city}</li>
  ));
  return <ul>{measurements}</ul>;
};

export default PollutionList;
