import { motion } from "framer-motion";

export const InicioSection = ({ setActiveButton }: { setActiveButton: (id: number) => void }) => {
    const handlePortfolioClick = () => {
        setActiveButton(3);
    };
    return (
        <div className="flex flex-col items-center justify-between w-full h-full text-center p-10">


            <main>
                <motion.div className="flex flex-col items-center justify-center flex-grow" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 1 }}>
                    <div className="w-40 h-40 bg-cover bg-top rounded-full my-4" style={{ backgroundImage: "url('/media/perfil.jpg')" }}></div>
                    <h1 className="text-4xl font-bold mb-4">Olá, eu sou Aureliano Amorim de Oliveira</h1>
                    <p className="text-lg mb-6">
                        Estou ingressando na área de <strong>Desenvolvimento Web Front-End</strong> em busca de novas oportunidades. Tenho conhecimento sobre ServiceNow, HTML, TailwindCSS, JavaScript/TypeScript e o básico em ReactJS.
                        Apaixonado por criar soluções inovadoras e entregar resultados de qualidade.
                    </p>
                    <button onClick={handlePortfolioClick} className="px-6 py-3 bg-blue-500 cursor-pointer rounded-md transition hover:bg-blue-600">
                        Veja meu portfólio
                    </button>
                </motion.div>
            </main>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 1 }}>
                <p className="text-sm italic mb-4 flex flex-col">Quando a sabedoria entrar no seu coração e o entendimento se tornar agradável para a sua alma, o raciocício o guardará e o discernimento o protegerá <span>- Provérbios 2:10, 11 TNM</span></p>
            </motion.div>
        </div>
    );
};