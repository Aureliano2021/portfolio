import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export const Portfolio = () => {

    const projetosList = [
        { id: 1, title: "Quiz", shortDescription: "Projeto de um Quiz, exibindo resultado final usando ReactJS com NextJS.", link: "https://quiz-liard-zeta.vercel.app/", codigo: "https://github.com/Aureliano2021/quiz" },
        {id: 2, title: "Galeria React", shortDescription: "Projeto de uma Galeria de fotos feito em React", link: "https://galeria-react-sable.vercel.app/", codigo: "https://github.com/Aureliano2021/Galeria-React"},
        { id: 3, title: "Currículo", shortDescription: "Projeto de currículo profissional usando HTML5, CSS3, JavaScript e TypeScript.", link: "https://aureliano2021.github.io/", codigo: "https://github.com/Aureliano2021/aureliano2021.github.io" },
        {id: 4, title: "Pizza JavaScript", shortDescription: "Projeto de vendas de pizza usando JavaScript", link: "https://pizza-javascript.vercel.app/", codigo: "https://github.com/Aureliano2021/Pizza-JavaScript"},
        { id: 5, title: "Bateria JavaScript", shortDescription: "Projeto de Bateria emitindo soms, código feito com JavaScript.", link: "https://bateriajavascript.vercel.app/", codigo: "https://github.com/Aureliano2021/Bateria" },
        {id: 6, title: "Clima API", shortDescription: "Projeto para dizer o clima de uma cidade usando api OpenWeather", link: "https://clima-api-zeta.vercel.app/", codigo:"https://github.com/Aureliano2021/ClimaAPI"},
        {id: 7, title: "Jogo da Velha", shortDescription: "Projeto de Jogo da Velha com interface usando JavaScript", link: "https://jogo-da-velha-five-mocha.vercel.app/", codigo: "https://github.com/Aureliano2021/Jogo-da-Velha"},
        {id: 8, title: "Relógio Analógico/Digital", shortDescription: "Projeto de um relógio analógico e digital usando JavaScript, HTML e CSS",link: "https://clock-ad.vercel.app/", codigo: "https://github.com/Aureliano2021/ClockAD"}
        
    ]

    return (
        <div className="flex flex-col justify-center items-center p-10 relative">
            <h1 className="text-4xl font-bold mb-6">Portfólio</h1>
            <div className="w-full max-w-screen-lg overflow-hidden">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={3}
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
                                <a href={projeto.link} target="_blank"><div className="w-30 h-30 bg-cover bg-top my-4 rounded-lg" style={{ backgroundImage: "url('/media/Logo.jpeg')" }}></div></a>
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
            </div>
        </div>
    )
}