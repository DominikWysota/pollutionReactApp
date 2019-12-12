import React from "react";

const SelectOptions = props => {
  const nations = props.nations.map((nation, index) => (
    <option key={index} value={nation.value}>
      {nation.nationality}
    </option>
  ));
  return (
    <label htmlFor="nationality">
      Wybierz kraj:
      <select onChange={props.change} name="nationality">
        {nations}
      </select>
    </label>
  );
};

export default SelectOptions;
