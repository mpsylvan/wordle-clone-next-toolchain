import React from "react";
import { Tile } from "./Tile";

export const TileRow = ({ guessData, guessIndex, rowIndex, dataKey }) => {
  return (
    <div
      className="tile-row"
      style={{
        display: "grid",
        gridTemplateColumns: "60px 60px 60px 60px 60px",
        margin: "5px",
      }}
    >
      <Tile
        guessData={guessData}
        dataIndex={1}
        guessIndex={guessIndex}
        activeTileRow={dataKey === rowIndex}
      />
      <Tile
        guessData={guessData}
        dataIndex={2}
        guessIndex={guessIndex}
        activeTileRow={dataKey === rowIndex}
      />
      <Tile
        guessData={guessData}
        dataIndex={3}
        guessIndex={guessIndex}
        activeTileRow={dataKey === rowIndex}
      />
      <Tile
        guessData={guessData}
        dataIndex={4}
        guessIndex={guessIndex}
        activeTileRow={dataKey === rowIndex}
      />
      <Tile
        guessData={guessData}
        dataIndex={5}
        guessIndex={guessIndex}
        activeTileRow={dataKey === rowIndex}
      />
      <a className="text-alert">{rowIndex}</a>
    </div>
  );
};
