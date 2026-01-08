import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Banner from "../src/components/banner";
import Carrosel from "../src/components/carrosel"
import Projects from "../src/components/Projects"
function App() {
  return (
    <>
      <Banner />
      <Carrosel />
      <Projects />
    </>
  );
}

export default App;
