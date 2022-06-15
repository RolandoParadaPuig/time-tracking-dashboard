import React from "react";
import "./timeUser.css";
import image from "../../../img/image-jeremy.png";
export const TimeUser = (props) => {
  const daylyClick = () => {
    props.setTimeFrameSelect("daily");
  };
  const weekplyClick = () => {
    props.setTimeFrameSelect("weekly");
  };
  const monthlyClick = () => {
    props.setTimeFrameSelect("monthly");
  };
  return (
    <div className={"time-tracking--user"}>
      <header className={"time-tracking--user-header"}>
        <img className={"time-tracking--user-img"} src={image} />
        <div className={"time-tracking--user-text"}>
          <h3 className={"time-tracking--user-description"}>Report for</h3>
          <h2 className={"time-tracking--user-name"}>Jeremy Robson</h2>
        </div>
      </header>
      <div className={"time-tracking--user-btn-display"}>
        <a onClick={daylyClick} className={"time-tracking--user-btn"}>
          Daily
        </a>
        <a onClick={weekplyClick} className={"time-tracking--user-btn"}>
          Weekly
        </a>
        <a onClick={monthlyClick} className={"time-tracking--user-btn"}>
          Monthly
        </a>
      </div>
    </div>
  );
};
