import { motion } from "framer-motion";

export const SobreMim = () => {
    return (
        <motion.div
            className="flex"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 1 }}
        >

        <div className="flex flex-col-reverse lg:flex-row">
            <div className="p-4 md:p-8 lg:flex-2/3 lg:p-16">
                <h1 className="text-3xl font-semibold lg:text-6xl">Sobre mim</h1>
                <p className="my-2 lg:my-4">Sou formado em Análise e Desenvolvimento de Sistemas e estou em busca da minha primeira oportunidade profissional na área de desenvolvimento Web/Mobile. Tenho 31 anos, sou casado e amo muito minha esposa. Nasci na cidade de Sorocaba, onde passei minha infância. No entanto, foi no estado de Pernambuco que vivi a maior parte da minha vida, construindo minha trajetória pessoal e profissional.</p>

                <p className="my-2 lg:my-4">Possuo conhecimentos em HTML5, CSS3, JavaScript, TypeScript, TailwindCSS, Git/GitHub, e atualmente estou aprofundando meus estudos em React. Recentemente, concluí o curso DEVNOW - Iniciantes em ServiceNow, onde aprendi conceitos como ITSM, Client Scripts, Business Rules e GlideRecord. Apesar disso, meu foco principal é no desenvolvimento web.</p>

                <p className="my-2 lg:my-4">Valorizo o trabalho em equipe, a empatia e o comprometimento. Sou apaixonado por aprender continuamente e estou sempre em busca de crescer profissionalmente, criando soluções inovadoras e de qualidade.</p>
            </div>
            <div className="w-full h-28 bg-cover bg-left lg:flex-1/3 lg:bg-top-left lg:h-screen" style={{ backgroundImage: "url('/media/sfrancisco-petrolina.jpg')" }}></div>
        </div>
        </motion.div>
    )
}