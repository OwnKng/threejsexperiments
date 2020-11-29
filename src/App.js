import { useState } from "react";
import "./App.css";
import { ThreeDimensionModel } from "./ThreeDimensionalModel";

function App() {
  const [texture, toggleTexture] = useState(true);

  return (
    <>
      <div className='titleWrapper'>
        <h3>⛰️ YuLongXueShan ⛰️</h3>
        <button onClick={() => toggleTexture((prevState) => !prevState)}>
          {texture ? "satellite overlay" : "material overlay"}
        </button>
      </div>
      <ThreeDimensionModel texture={texture} />
    </>
  );
}

export default App;
