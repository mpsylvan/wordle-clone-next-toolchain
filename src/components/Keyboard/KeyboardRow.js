import React from "react";
import { KeyboardKey } from "./KeyboardKey";

export const KeyboardRow = ({ dataArray }) => {
  return (
    <div style={{ display: "flex" }}>
      {dataArray.map((key) => (
        <KeyboardKey key={key} dataKey={key} />
      ))}
    </div>
  );
};
