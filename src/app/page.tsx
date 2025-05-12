"use client"

import { Contato } from "@/components/Contato";
import { Curriculo } from "@/components/Curriculo";
import { InicioSection } from "@/components/InicioSection";
import { MenuButton } from "@/components/MenuButton";
import { Portfolio } from "@/components/Portfolio";
import { Servicos } from "@/components/Servicos";
import { SobreMim } from "@/components/SobreMim";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MobileMenu } from "@/components/MobileMenu";

const Page = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [screen, setScreen] = useState(window.innerWidth);

  const changeScreen = () => {
    setScreen(window.innerWidth)
  }

  useEffect(() => {
      window.addEventListener("resize", changeScreen)

      return () => {
        window.addEventListener("resize", changeScreen)
      };
  }, [])

  const structure = `flex ${screen < 750 && ("flex-col")} w-screen h-screen overflow-x-hidden`

  return(
    <div className={structure}>
      {screen >= 750 && (
        <div className="w-64 h-full bg-gray-500 text-white">
          <MenuButton setActiveButton={setActiveButton}/>
        </div>
      )}
      {screen < 750 && (
        <div className="w-full h-28 bg-gray-500 text-white">
          <MobileMenu setActiveButton={setActiveButton}/>
        </div>
      )}
      <div className="w-full h-full bg-gray-900 text-white">
        <AnimatePresence mode="wait">
        {activeButton === 1 && (<InicioSection setActiveButton={setActiveButton}/>)}
        {activeButton === 2 && (<SobreMim />)}
        {activeButton === 3 && (<Portfolio />)}
        {activeButton === 4 && (<Servicos setActiveButton={setActiveButton}/>)}
        {activeButton === 5 && (<Contato />)}
        {activeButton === 6 && (<Curriculo />)}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Page;