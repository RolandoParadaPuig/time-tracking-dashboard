import React, { useState } from "react";
import "./timeLayout.css";
import { TimeCard } from "../timeCard/TimeCard";
import { TimeUser } from "../timeUser/TimeUser";

export const TimeLayout = () => {
  const [timeFrameSelect, setTimeFrameSelect] = useState("monthly");
  return (
    <main className={"time-tracking--layout"}>
      <TimeUser setTimeFrameSelect={setTimeFrameSelect} />
      <TimeCard timeFrameSelect={timeFrameSelect} />
    </main>
  );
};
