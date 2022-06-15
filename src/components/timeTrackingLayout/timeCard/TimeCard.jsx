import React, { useState, useEffect } from "react";
import "./timeCard.css";
import { data } from "../../../data/data.json";
export const TimeCard = (props) => {
  const timeFrameSelect = props.timeFrameSelect;
  console.log(timeFrameSelect);
  return data.map((time) => {
    const classNameTitle = time.title.split(" ").join("-").toLowerCase();
    let timeFrame;
    timeFrameSelect == "daily"
      ? (timeFrame = time.timeframes.daily)
      : timeFrameSelect == "weekly"
      ? (timeFrame = time.timeframes.weekly)
      : (timeFrame = time.timeframes.monthly);
    return (
      <div key={time.title} className={`time-tracking--card ${classNameTitle}`}>
        <article className="time-tracking--article-body">
          <header className="time-tracking--article-header">
            <h2>{time.title}</h2>
            <a type="" target={"#"}>
              dots
            </a>
          </header>
          <div className="time-tracking--article-timeframe">
            <p className="time-tracking--article-current">
              {timeFrame.current}hrs
            </p>
            <p className="time-tracking--article-previous">
              Last{" "}
              {timeFrameSelect == "daily"
                ? "day"
                : timeFrameSelect == "weekly"
                ? "week"
                : "month"}{" "}
              - {timeFrame.previous}hrs
            </p>
          </div>
        </article>
      </div>
    );
  });
};
