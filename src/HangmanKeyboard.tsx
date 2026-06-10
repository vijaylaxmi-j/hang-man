import alphabet from "./data/alphabet.json";
import styles from "./assets/keyboard.module.css";

type HangmanKeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disableLetter?: boolean;
};
const HangmanKeyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disableLetter=false,
}: HangmanKeyboardProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minMax(75px,1fr))",
        gap: ".5rem",
      }}
    >
      {alphabet.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inactiveLetters.includes(key);

        return (
          <button
            className={`${styles.btn} ${isActive ? styles.active : ""} ${isInActive ? styles.inactive : ""}`}
            disabled={isInActive || isActive || disableLetter}
            key={key}
            onClick={() => addGuessedLetter(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default HangmanKeyboard;
