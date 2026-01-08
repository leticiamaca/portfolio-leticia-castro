import react from "react";

function banner(){
  return<>
    <div className="h-auto font-sans">
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
}

export default banner