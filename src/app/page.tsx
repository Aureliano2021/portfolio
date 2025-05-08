"use client"

import { Contato } from "@/components/Contato";
import { Curriculo } from "@/components/Curriculo";
import { InicioSection } from "@/components/InicioSection";
import { MenuButton } from "@/components/MenuButton";
import { Portfolio } from "@/components/Portfolio";
import { Servicos } from "@/components/Servicos";
import { SobreMim } from "@/components/SobreMim";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Page = () => {
  const [activeButton, setActiveButton] = useState(1);

  return(
    <div className="flex w-screen h-screen">
      <div className="w-64 h-full bg-gray-500 text-white">
        <MenuButton setActiveButton={setActiveButton}/>
      </div>
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