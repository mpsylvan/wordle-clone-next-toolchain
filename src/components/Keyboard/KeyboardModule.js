import React from "react";
import { KeyboardRow } from "./KeyboardRow";

export const KeyboardModule = ({ guess }) => {
  const dataRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const dataRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const dataRow3 = ["ENT", "Z", "X", "C", "V", "B", "N", "M", "DEL"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "350px",
        marginTop: "20px",
      }}
      className="keyboard-module"
    >
      <KeyboardRow dataArray={dataRow1} />
      <KeyboardRow dataArray={dataRow2} />
      <KeyboardRow dataArray={dataRow3} />
    </div>
  );
};
