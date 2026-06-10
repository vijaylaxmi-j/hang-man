type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
  reveal?: boolean;
};
const HangmanWord = ({ wordToGuess, guessedLetters,reveal=false }: HangmanWordProps) => {
  return (
    <div
      style={{
        display: "flex",
        fontSize: "6rem",
        fontWeight: "bold",
        fontFamily: "monospace",
        gap: ".25rem",
        textTransform: "uppercase",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span
          style={{ borderBottom: "0.1em solid black", margin: "0 5px 0 5px" }}
          key={index}
        >
          <span
            style={{
              visibility: guessedLetters.includes(letter) || reveal
                ? "visible"
                : "hidden",
              color: !guessedLetters.includes(letter) && reveal ? "red" :" black"
              
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
