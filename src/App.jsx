import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-linear-to-br from-[#013D7D60] via-[#000] to-[#002B5860] h-auto font-sans">
        <div className="backdrop-blur-md bg-white/3  shadow-lg p-6 ">
          {/* menu */}
          <ul className="flex items-center justify-between text-white/60 w-[30vw] uppercase font-semibold  text-[12px]">
            <li>
              <a href="#">Sobre mim</a>
            </li>
            <li>
              <a href="#">Desenhos</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
            <li>
              <a href="#">Entre em contato</a>
            </li>
          </ul>
        </div>
        <div className=" flex justify-center items-center h-screen font-semibold uppercase tracking-[0.5rem]">
          <p className="text-[#fff]">Letícia de Castro</p>
        </div>
      </div>
    </>
  );
}

export default App;
