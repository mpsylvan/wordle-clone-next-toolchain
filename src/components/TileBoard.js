import React, { useState } from "react";
import { TileRow } from "./TileRow";

export const TileBoard = ({ guessData, guessIndex, rowIndex }) => {
  return (
    <div className="game-module" style={{}}>
      <TileRow
        dataKey={0}
        guessData={guessData}
        guessIndex={guessIndex}
        rowIndex={rowIndex}
      />
      <TileRow
        dataKey={1}
        guessData={guessData}
        guessIndex={guessIndex}
        rowIndex={rowIndex}
      />
      <TileRow
        dataKey={2}
        guessData={guessData}
        guessIndex={guessIndex}
        rowIndex={rowIndex}
      />
      <TileRow
        dataKey={3}
        guessData={guessData}
        guessIndex={guessIndex}
        rowIndex={rowIndex}
      />
      <TileRow
        dataKey={4}
        guessData={guessData}
        guessIndex={guessIndex}
        rowIndex={rowIndex}
      />
      <TileRow
        dataKey={5}
        guessData={guessData}
        guessIndex={guessIndex}
        rowIndex={rowIndex}
      />
    </div>
  );
};
