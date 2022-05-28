import React from "react";
import { HeaderText } from './HeaderText.js';

export const RatePoints = (props) => {
  var indents = [];
  for (var i = 0; i < props.max; i++) {
    indents.push(
      <li key={i}>
        <label>
          <input type="radio" name="testGroup"/>{i + 1}
        </label>
      </li>
    );
  };
  return indents;
}

export const CourseRate = (props) => {
  return (
    <div>
      <HeaderText/>
      <ul className="rate-points">
        <RatePoints max={props.max}/>
      </ul>
    </div>
  )
}
