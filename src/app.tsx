import React from "react";
import LogoHero from "./components/LogoHero";

function App() {
  return (
    <div>
      <LogoHero />
      <div className="start-button-wrapper">
        <button className="start-button">ابدأ الآن</button>
      </div>
    </div>
  );
}

export default App;
