import React, { useState } from "react";

var UseDropDown = (label, defaultState, options) => {
  var [getState, setState] = useState(defaultState);
  var id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  var DropDown = () => {
    return (
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          value={getState}
          onChange={(event) => setState(event.target.value)}
          onBlur={(event) => setState(event.target.value)}
          disabled={options.length == 0}
        >
          <option>All</option>
          {options.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </label>
    );
  };

  return [getState, DropDown, setState];
};

export default UseDropDown;
