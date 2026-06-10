const HEAD = (
  <div
    style={{
      borderRadius: "100%",
      border: "10px solid black",
      width: "50px",
      height: "50px",
      position: "absolute",
      right: "-28px",
      top: "50px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      position: "absolute",
      right: "0px",
      top: "115px",
      background: "black",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      right: "0px",
      top: "200px",
      background: "black",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      right: "-90px",
      top: "200px",
      background: "black",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      right: "-100px",
      top: "150px",
      background: "black",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);
const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      right: "10px",
      top: "150px",
      background: "black",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];
type HangmanDrawingProps = {
  numberOfGuesses: number;
};
const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          right: "0px",
          top: "0px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          marginLeft: "120px",
          background: "black",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
};

export default HangmanDrawing;
