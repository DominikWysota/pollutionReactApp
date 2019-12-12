import React from "react";

const SelectPollution = props => {
  const pollutions = props.pollutions.map((polution, index) => (
    <option key={index} value={polution}>
      {polution}
    </option>
  ));
  return (
    <label htmlFor="nationality">
      Wybierz zanieczyszczenie:
      <select onChange={props.change} name="pollution">
        {pollutions}
      </select>
    </label>
  );
};

export default SelectPollution;
