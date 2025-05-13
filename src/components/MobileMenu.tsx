import { menuItems } from "@/data/menuItems"
import { useState } from "react"

export const MobileMenu =({setActiveButton}: { setActiveButton: (id: number) => void }) => {
    const [clicou, setClicou] = useState(false)
    const [rotate90, setRotate90] = useState("p-4 rotate-0 transition duration-300 ease-linear")
    const [deslize, setDeslize] = useState("")

    const handleMenuClick = () => {
        if (!clicou) {
            setClicou(true)
            setRotate90("p-4 -rotate-90 transition duration-300 ease-linear")
            setDeslize("absolute top-26 right-0 h-4/5 w-4/5 bg-gray-300 opacity-90 pointer-events-auto transition-all duration-300 ease-out z-100")
        }
        if (clicou) {
            setClicou(false)
            setRotate90("p-4 rotate-0 transition duration-300 ease-linear")
            setDeslize("absolute top-26 right-0 h-4/5 w-3/4 bg-gray-300 opacity-0 pointer-events-none transition-all duration-300 ease-out z-100")
        }
    }

    const handleItemClick = (item: { id: number; name: string}) => {
        setActiveButton(item.id)
        setDeslize("absolute top-26 right-0 h-4/5 w-3/4 bg-gray-300 opacity-0 pointer-events-none transition-all duration-300 ease-out z-100")
        setRotate90("p-4 rotate-0 transition duration-300 ease-linear")
    }

    return (
        <div>
            <nav className="w-full flex justify-between items-center p-2">
                <div onClick={() => setActiveButton(1)} className="w-20 h-20 bg-cover bg-center rounded-full p-4" style={{ backgroundImage: "url('/media/Logo.jpeg')" }}> </div>
                <div onClick={handleMenuClick} className={rotate90}>
                    <div className="h-2 w-12 bg-gray-900 m-2 rounded-lg"></div>
                    <div className="h-2 w-12 bg-gray-900 m-2 rounded-lg"></div>
                    <div className="h-2 w-12 bg-gray-900 m-2 rounded-lg"></div>
                </div>
            </nav>
            <div className={deslize}>
                <ul className="w-full h-full flex flex-grow flex-col justify-center items-center text-center text-black border-b border-black">
                    {menuItems.map((item) => (
                        <li onClick={() => handleItemClick(item)} className='w-full flex-grow flex items-center justify-center cursor-pointer font-semibold text-xl border-t hover:bg-gray-700' key={item.id}>
                            <a>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}