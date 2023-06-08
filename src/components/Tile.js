import React, { useEffect, useState } from "react";

/*
 * WHAT DOES THIS TILE NEED TO KNOW?
 * 1) is it the currentl tile to be guessed?
 * 2) has it been guessed and if so.
 * 3) is the tile in the word.
 * 4) is the tile the correct position.
 *
 * */

export const Tile = ({
  guessData,
  dataIndex,
  guessIndex,
  activeTileRow,
  solution,
  rowIndex,
  dataKey,
}) => {
  const [renderData, setRenderData] = useState("");
  const [presentInSolution, setPresentInSolution] = useState(false);
  const [correctPosition, setCorrectPosition] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [tileType, setTileType] = useState("tile");

  useEffect(() => {
    if (dataKey === rowIndex) {
      if (dataIndex > guessIndex) {
        setRenderData("");
        setTileType("tile");
      }
      if (dataIndex === guessIndex + 1) {
        setTileType("tile-current");
      }
      if (dataIndex === guessIndex) {
        setRenderData(guessData);
        setTileType("tile");
      }
      if (dataIndex <= guessIndex) {
        setTileType("tile");
      }
    }
    if (dataKey < rowIndex) {
      setCorrectPosition(solution[dataIndex - 1] === renderData);
      setPresentInSolution(solution.includes(renderData));
      if (presentInSolution) {
        setTileType("tile-submitted-present");
      }
      if (correctPosition) {
        setTileType("tile-submitted-correct");
      }
    }
  }, [guessIndex, guessData, rowIndex]);

  return (
    <div
      className={tileType}
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   borderRadius: "5px",
      //   background: activeTileRow ? "#000" : "#181918",
      //   color: correctPosition ? "#ce2" : "#eee",
      //   height: "54px",
      //   width: "54px",
      //   margin: "px",
      //   border: currentTile ? "2px solid #bbb" : "2px solid #777",
      // }}
    >
      <h4 className="fw-bold">{renderData}</h4>
    </div>
  );
};
