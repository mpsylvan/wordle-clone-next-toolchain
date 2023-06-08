import React from "react";

import { Gameboard } from "./Gameboard";

export default function Layout({ url }) {
  const speakerId = parseInt(url.substring(9).replace("#", ""));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#181918",
        height: "100vh",
      }}
    >
      <Gameboard />
    </div>
  );
}
