import { useState } from "react";
import "./App.css";
import { ThreeDimensionModel } from "./ThreeDimensionalModel";

function App() {
  const [texture, toggleTexture] = useState(false);

  return (
    <>
      <h1>Hutiaoxia</h1>
      <button onClick={() => toggleTexture((prevState) => !prevState)}>
        Toggle
      </button>
      <ThreeDimensionModel texture={texture} />
    </>
  );
}

export default App;
