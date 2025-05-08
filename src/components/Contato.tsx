import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";


export const Contato = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    "service_s1bglph", // Substitua pelo seu Service ID do EmailJS
                    "template_vkpz2c3", // Substitua pelo seu Template ID do EmailJS
                    form.current,
                    "HOPFYdDqk6yIJ7n3w" // Substitua pela sua Public Key do EmailJS
                )
                .then(
                    (result) => {
                        console.log("E-mail enviado com sucesso:", result.text);
                        alert("E-mail enviado com sucesso!");
                    },
                    (error) => {
                        console.error("Erro ao enviar o e-mail:", error.text);
                        alert("Erro ao enviar o e-mail. Tente novamente.");
                    }
                );
        }
    };

    const whatsApp = () => {
        window.open("https://api.whatsapp.com/send?phone=5587991081827", "_blank");
    };


    return (
        <div className="flex items-center justify-center h-full bg-gray-900 text-white">
            <div className="flex flex-col flex-2/3 items-center justify-center">
            <motion.div className="flex flex-col items-center justify-center flex-grow" initial={{ opacity: 0}} animate={{ opacity: 1, y:0 }} exit={{ opacity: 0}} transition={{ duration: 1 }}>
                <h1 className="text-4xl font-bold mb-6">Entre em Contato</h1>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full max-w-lg">
                    <input
                        type="text"
                        value="Contato feito pelo portfólio"
                        name="title"
                        className="hidden"
                    />
                    <label className="mb-2">Nome</label>
                    <input
                        type="text"
                        name="name"
                        className="p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
                        required
                    />
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col mr-2">
                            <label className="mb-2">Empresa</label>
                            <input
                                type="text"
                                name="enterprise"
                                className="p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
                                required
                            />
                        </div>
                        <div className="flex flex-col ml-2">
                            <label className="mb-2">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                className="p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
                                required
                            />
                        </div>
                    </div>
                    <label className="mb-2">Mensagem</label>
                    <textarea
                        name="message"
                        className="p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
                        rows={5}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="p-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-bold"
                    >
                        Enviar
                    </button>
                </form>
                </motion.div>
            </div>
            <div className="flex flex-col flex-1/3 h-screen w-full p-8 bg-black">
            <motion.div className="flex flex-col" initial={{ opacity: 0}} animate={{ opacity: 1, y:0 }} exit={{ opacity: 0}} transition={{ duration: 1 }}>
                <h1 className="text-4xl font-bold mb-6">Contatos</h1>
                <div>Telefone: (87)99108-1827</div>
                <div className="text-sm">Email: <a>aureliano.oliveira2011@gmail.com</a></div>
                <div className="flex flex-col items-center justify-center mt-8">
                    <div onClick={whatsApp} className="flex justify-center items-center p-4 bg-green-600 cursor-pointer rounded-md text-lg font-bold hover:bg-green-700 transition duration-300">
                        Contrate-me<img className="mx-2 h-6" src="/media/whatsapp.png"></img>
                    </div>
                    <a href="https://www.linkedin.com/in/aurelianooliveira/" target="_blank" className="mt-4 p-4 text-lg flex items-center">Linked <img src="/media/linkedin.png" className="inline h-4"></img></a>
                </div>
                </motion.div>
            </div>
            
        </div>
    );
};