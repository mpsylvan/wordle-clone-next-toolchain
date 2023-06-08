import React, { useEffect, useState } from "react";

/*
 * WHAT DOES THIS TILE NEED TO KNOW?
 * 1) is it the currentl tile to be guessed?
 * 2) has it been guessed and if so.
 * 3) is the tile in the word.
 * 4) is the tile the correct position.
 *
 * */

export const Tile = ({ guessData, dataIndex, guessIndex, activeTileRow }) => {
  const [renderData, setRenderData] = useState("");
  const [currentTile, setCurrentTile] = useState(false);

  useEffect(() => {
    if (activeTileRow) {
      if (dataIndex > guessIndex) {
        setRenderData("");
        setCurrentTile(false);
      }
      if (dataIndex === guessIndex + 1) {
        setCurrentTile(true);
      }
      if (dataIndex === guessIndex) {
        setRenderData(guessData);
      }
      if (dataIndex <= guessIndex) {
        setCurrentTile(false);
      }
    }
  }, [activeTileRow, guessIndex, guessData]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        background: activeTileRow ? "#000" : "#181918",
        color: "#eee",
        height: "54px",
        width: "54px",
        margin: "px",
        border: currentTile ? "2px solid #bbb" : "2px solid #777",
      }}
    >
      <h4 className="fw-bold">{renderData}</h4>
    </div>
  );
};
