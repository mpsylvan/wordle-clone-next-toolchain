import React from "react";
import { TileBoard } from "./TileBoard";
import { KeyboardModule } from "./Keyboard/KeyboardModule";
import alphabet from "../../utils/utilities";
import { useState, useEffect } from "react";

export const Gameboard = () => {
  const SOLUTION = ["A", "G", "A", "V", "E"];

  const [solved, setSolved] = useState(false);
  const [guessLetter, setGuessLetter] = useState("");
  const [guessArray, setGuessArray] = useState([]);
  const [rowIndex, setRowIndex] = useState(0);

  let localGuessArray = [];
  let inputVal;
  let localRowIndex = 0;

  const keyDownHandler = (e) => {
    inputVal = "";
    inputVal = e.code.replace("Key", "");
    setGuessLetter(inputVal);
    if (alphabet.includes(inputVal)) {
      if (localGuessArray.length <= 4) {
        setGuessLetter(inputVal);
        localGuessArray.push(inputVal);
        setGuessArray(localGuessArray);
        setRowIndex(localRowIndex);
      } else {
        setGuessLetter(inputVal);
        localGuessArray.splice(4, 1, inputVal);
      }
    }
    if (inputVal === "Backspace") {
      if (localRowIndex > -1) {
        localGuessArray.pop();
        setGuessArray(localGuessArray);
        setGuessLetter(localGuessArray[localGuessArray.length - 1]);
      }
    }
    if (inputVal === "Enter") {
      if (localGuessArray.length === 5) {
        if (localGuessArray.join("") === SOLUTION.join("")) {
          setSolved(true);
        }
        localRowIndex++;
        setRowIndex(localRowIndex);
        localGuessArray = [];
        setGuessArray(localGuessArray);
        setGuessLetter("");
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
  }, []);

  return (
    <>
      <div
        className="game-board"
        style={{
          display: "flex",
          height: "500px",
          width: "500px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TileBoard
          guessData={guessLetter}
          guessIndex={guessArray.length}
          guessArray={guessArray}
          rowIndex={rowIndex}
          solution={SOLUTION}
        />
        <KeyboardModule guessData={guessLetter} />;
      </div>
    </>
  );
};
