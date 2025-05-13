import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export const Portfolio = ({screen}: {screen: number}) => {

    const projetosList = [
        { id: 1, title: "Quiz", shortDescription: "Projeto de um Quiz, exibindo resultado final usando ReactJS com NextJS.", link: "https://quiz-liard-zeta.vercel.app/", codigo: "https://github.com/Aureliano2021/quiz", image: "/media/Quiz.jpg" },
        {id: 2, title: "Galeria React", shortDescription: "Projeto de uma Galeria de fotos feito em React", link: "https://galeria-react-sable.vercel.app/", codigo: "https://github.com/Aureliano2021/Galeria-React", image: "/media/Gallery.jpg"},
        { id: 3, title: "Currículo", shortDescription: "Projeto de currículo profissional usando HTML5, CSS3, JavaScript e TypeScript.", link: "https://aureliano2021.github.io/", codigo: "https://github.com/Aureliano2021/aureliano2021.github.io", image: "/media/curriculo.png"},
        {id: 4, title: "Pizza JavaScript", shortDescription: "Projeto de vendas de pizza usando JavaScript", link: "https://pizza-javascript.vercel.app/", codigo: "https://github.com/Aureliano2021/Pizza-JavaScript" , image: "/media/Pizza.jpg"},
        { id: 5, title: "Bateria JavaScript", shortDescription: "Projeto de Bateria emitindo soms, código feito com JavaScript.", link: "https://bateriajavascript.vercel.app/", codigo: "https://github.com/Aureliano2021/Bateria", image: "/media/Drums.jpg"},
        {id: 6, title: "Clima API", shortDescription: "Projeto para dizer o clima de uma cidade usando api OpenWeather", link: "https://clima-api-zeta.vercel.app/", codigo:"https://github.com/Aureliano2021/ClimaAPI", image: "/media/Weather.jpg"},
        {id: 7, title: "Jogo da Velha", shortDescription: "Projeto de Jogo da Velha com interface usando JavaScript", link: "https://jogo-da-velha-five-mocha.vercel.app/", codigo: "https://github.com/Aureliano2021/Jogo-da-Velha", image: "/media/OldGame.jpg"},
        {id: 8, title: "Relógio Analógico/Digital", shortDescription: "Projeto de um relógio analógico e digital usando JavaScript, HTML e CSS",link: "https://clock-ad.vercel.app/", codigo: "https://github.com/Aureliano2021/ClockAD", image: "/media/Clock.jpg"}
        
    ]

    const [chkScreen, setchkScreen] = useState(3)

    const checkScreen = () => {
        if (screen !== null && screen < 1024){
            return setchkScreen(1)
        } else return setchkScreen(3)
    }

    useEffect(() => {
        checkScreen();

        const handleResize = () => {
            checkScreen();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize",handleResize)
        };
    }, [screen])

    return (
        <div className="flex flex-col justify-center items-center p-10 relative">
            <h1 className="text-4xl font-bold mb-6">Portfólio</h1>
            <motion.div className="w-full max-w-screen-lg overflow-hidden" initial={{ opacity: 0}} animate={{ opacity: 1, y:0 }} exit={{ opacity: 0}} transition={{ duration: 1 }}>
            {/*<div className="w-full max-w-screen-lg overflow-hidden">*/}
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={chkScreen}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    pagination={{
                        clickable: true,
                        el: ".custom-pagination", // Classe personalizada para o pagination
                    }}
                    className="w-full"
                >
                    <div></div>
                    {projetosList.map((projeto) => (
                        <SwiperSlide key={projeto.id}>
                            <div className="border border-gray-700 justify-center items-center flex flex-col rounded-lg">
                                <a href={projeto.link} target="_blank"><div className="w-48 h-30 bg-cover bg-top my-4 rounded-lg hover:brightness-50 transition duration-300" style={{ backgroundImage: `url(${projeto.image})` }}></div></a>
                                <div className="bg-gray-700 flex flex-col items-start m-2 p-2 rounded-md">
                                    <h2 className="text-gray-300 text-lg font-semibold">{projeto.title}</h2>
                                    <p className="text-gray-400 text-sm">{projeto.shortDescription}</p>
                                    <div className="grid grid-cols-2 gap-4 justify-center items-center w-full my-2">
                                        <a className="text-white bg-blue-500 rounded-4xl text-sm text-center p-1" href={projeto.link} target="_blank">Execução</a>
                                        <a className="text-white bg-blue-500 rounded-4xl text-sm text-center p-1" href={projeto.codigo} target="_blank">GitHub</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Botões de navegação personalizados */}
                <div className="swiper-button-prev absolute left-0 top-1/2 transform text-gray-700 hover:text-gray-900">
                </div>
                <div className="swiper-button-next absolute right-0 top-1/2 transform text-gray-700 hover:text-gray-900">
                </div>
                {/* Pagination fora do conteúdo */}
                <div className="custom-pagination absolute -bottom-10 left-0 right-0 flex justify-center"></div>
            {/*</div>*/}
            </motion.div>
        </div>
    )
}