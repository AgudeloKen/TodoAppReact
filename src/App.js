import React, { useState } from "react";
import Interface from "./Components/Interface";
import { BsMoonStars, BsBrightnessHigh } from "react-icons/bs";

function App() {
  const [dark, setDark] = useState(true);

  const handleTheme = () => {
    setDark(!dark);
  };
  return (
    <div className={dark ? "dark" : ""}>
      <div className="flex flex-col items-center justify-center min-h-screen h-auto bg-gray-100 transition ease duration-500 text-center dark:bg-gray-900">
        <h1 className="text-4xl text-black font-bold font-Libre mb-1 dark:text-white">
          To do App
        </h1>
        <button
          onClick={handleTheme}
          className="m-3 text-3xl text-black dark:text-white"
        >
          {" "}
          {dark ? <BsBrightnessHigh /> : <BsMoonStars />}
        </button>
        <Interface />
      </div>
    </div>
  );
}

export default App;
