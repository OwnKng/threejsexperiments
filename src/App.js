import { useState } from "react";
import "./App.css";
import { ThreeDimensionModel } from "./ThreeDimensionalModel";

function App() {
  const [texture, toggleTexture] = useState(false);

  return (
    <>
      <div className='titleWrapper'>
        <h3>YuLongXueShan</h3>
        <h4>玉龙雪山</h4>
        <button onClick={() => toggleTexture((prevState) => !prevState)}>
          {texture ? "toggle rayshader" : "toggle material"}
        </button>
      </div>
      <ThreeDimensionModel texture={texture} />
    </>
  );
}

export default App;
