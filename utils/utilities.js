const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

function handleNewLetter(inputVal, guessArray) {
  if (guessArray.length <= 4) {
    guessArray.push(inputVal);
    setGuessArray(guessArray);
    setGuessLetter(inputVal);
  } else {
    setGuessLetter(inputVal);
    guessArray.splice(4, 1, inputVal);
  }
  return;
}

export default alphabet;
