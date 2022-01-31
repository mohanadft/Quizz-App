import React from "react";
import Start from "./Components/Start";
import Questions from "./Components/Questions";
export default function App() {
  const [hasStart, setHasStart] = React.useState(false);

  return (
    <main className="begin">
      <img src="./Images/blob-left.png" alt="svg" className="bottom-left" />
      <img src="./Images/blob-right.png" alt="svg" className="top-right" />
      {hasStart ? <Questions /> : <Start hasStart={() => setHasStart(true)} />}
    </main>
  );
}
