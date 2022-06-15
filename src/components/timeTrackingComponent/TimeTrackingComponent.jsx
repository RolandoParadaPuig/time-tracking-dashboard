import React from "react";
import { TimeLayout } from "../timeTrackingLayout/timeLayout/TimeLayout";
import "./timeTrackingComponent.css";
export const TimeTrackingComponent = () => {
  return (
    <div className={"time-tracking--component"}>
      <TimeLayout />
    </div>
  );
};
