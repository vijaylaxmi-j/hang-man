import { useState, useEffect, useCallback } from "react";
import words from "./data/wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanKeyboard from "./HangmanKeyboard";
import HangmanWord from "./HangmanWord";
function App() {
  function getWord() {
    return words[Math.floor(Math.random() * words.length)];
  }
  const [wordToGuess, SetWordToGuess] = useState(getWord);

  const [guessWordLetter, setGuessWordLetter] = useState<string[]>([]);

  const incorrectLetters = guessWordLetter.filter(
    (letter) => !wordToGuess.includes(letter),
  );
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessWordLetter.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessWordLetter.includes(letter)) return;

      setGuessWordLetter((currentLetters) => [...currentLetters, letter]);
    },
    [guessWordLetter],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      SetWordToGuess(getWord);
      setGuessWordLetter([]);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessWordLetter]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/) || isWinner || isLoser) return;

      e.preventDefault();

      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessWordLetter]);
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && "You Win! Refresh to play again"}
        {isLoser && "Better Luck Next Time! Refresh to play again"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        wordToGuess={wordToGuess}
        guessedLetters={guessWordLetter}
        reveal={isLoser}
      />
      <div style={{ alignSelf: "stretch" }}>
        <HangmanKeyboard
          activeLetters={guessWordLetter.filter((letter) =>
            wordToGuess.includes(letter),
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          disableLetter={isWinner || isLoser}
        />
      </div>
    </div>
  );
}

export default App;
