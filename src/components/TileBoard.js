import React, { useState } from "react";
import { TileRow } from "./TileRow";

export const TileBoard = ({ guessData, guessIndex, rowIndex, solution }) => {
  return (
    <div className="game-module" style={{}}>
      <TileRow
        dataKey={0}
        guessData={guessData}
        guessIndex={guessIndex}
        rowIndex={rowIndex}
        solution={solution}
      />
      <TileRow
        dataKey={1}
        guessData={guessData}
        guessIndex={guessIndex}
        rowIndex={rowIndex}
        solution={solution}
      />
      <TileRow
        dataKey={2}
        guessData={guessData}
        guessIndex={guessIndex}
        rowIndex={rowIndex}
        solution={solution}
      />
      <TileRow
        dataKey={3}
        guessData={guessData}
        guessIndex={guessIndex}
        rowIndex={rowIndex}
        solution={solution}
      />
      <TileRow
        dataKey={4}
        guessData={guessData}
        guessIndex={guessIndex}
        rowIndex={rowIndex}
        solution={solution}
      />
      <TileRow
        dataKey={5}
        guessData={guessData}
        guessIndex={guessIndex}
        rowIndex={rowIndex}
        solution={solution}
      />
    </div>
  );
};
