import React from "react";

export const KeyboardKey = ({ dataKey }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40px",
        width: "50px",
        margin: "2px",
        borderRadius: "5px",
        background: "#555",
        color: "#fff",
      }}
      className="fw-bold"
      key={dataKey}
    >
      {dataKey}
    </div>
  );
};
