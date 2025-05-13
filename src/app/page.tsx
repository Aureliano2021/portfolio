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
  const [screen, setScreen] = useState<number | null>(null);

  const changeScreen = () => {
    if (typeof window !== "undefined"){
    setScreen(window.innerWidth)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined"){
      setScreen(window.innerWidth)
      window.addEventListener("resize", changeScreen)

      return () => {
        window.addEventListener("resize", changeScreen)
      };
    }
  }, [])

  const structure = `flex ${((screen !== null && screen < 750)) && ("flex-col")} w-screen h-screen`

  return(
    <div className={"flex flex-col min-h-screen bg-gray-900 lg:flex-row"}>
      {((screen !== null && screen >= 1024)) && (
        <div className="w-64 h-full bg-gray-500 text-white">
          <MenuButton setActiveButton={setActiveButton}/>
        </div>
      )}
      {((screen !== null && screen < 1024)) && (
        <div className="w-full h-28 bg-gray-500 text-white">
          <MobileMenu setActiveButton={setActiveButton}/>
        </div>
      )}
      <div className="w-full h-full bg-gray-900 text-white">
        <AnimatePresence mode="wait">
        {activeButton === 1 && (<InicioSection setActiveButton={setActiveButton}/>)}
        {activeButton === 2 && (<SobreMim />)}
        {activeButton === 3 && screen !== null && <Portfolio screen={screen}/>}
        {activeButton === 4 && (<Servicos setActiveButton={setActiveButton}/>)}
        {activeButton === 5 && (<Contato />)}
        {activeButton === 6 && (<Curriculo />)}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Page;