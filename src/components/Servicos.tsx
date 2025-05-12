import { motion } from "framer-motion";

export const Servicos = ({ setActiveButton }: { setActiveButton: (id: number) => void }) => {
    
    const handleContatoClick = () => {
        setActiveButton(5);
    }
    
    const services = [
      {
        title: "Desenvolvimento Web",
        description: "Criação de sites modernos e responsivos.",
        tecnology: ["HTML5","CSS3","React - básico", "TailwindCSS", "JavaScript", "TypeScript"]
      },
      {
        title: "Consultoria Técnica",
        description: "Suporte e consultoria em tecnologias como ServiceNow.",
        tecnology: ["ITSM","Client Script","Business Rules", "GlideRecord (básico)", "Knowledge Base", "Scheduled Jobs"]
      },
      {
        title: "Manutenção e Suporte",
        description: "Atualização e correção de problemas em sistemas existentes.",
        tecnology: ["Correção de Bugs","Gestão de Usuários","Permissões do Sistema", "Suporte ao usuário", "Instalação e Manutenção de equipamentos"]
      },
    ];
  
    return (
      <div className="flex flex-col items-center justify-center px-8 py-16 bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-6">Meus Serviços</h1>
        <div className="grid grid-cols-3 gap-8">
          {services.map((service, index) => (
            
            <motion.div className="flex flex-col items-center justify-center flex-grow" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y:0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 1 }}>
            <div
              key={index}
              className="p-6 border border-gray-700 rounded-lg hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-md text-gray-300 mb-2">{service.description}</p>
              <ul>
                {service.tecnology.map((tech, index) => (
                  <li key={index+10} className="text-sm text-gray-400">
                    - {tech}
                  </li>
                ))}
              </ul>
            </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div className="flex flex-col items-center justify-center flex-grow" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y:0 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 1 }}>
        <button onClick={handleContatoClick} className="mt-8 p-4 bg-blue-600 hover:bg-blue-700 rounded text-white font-bold cursor-pointer">
          Contrate-me
        </button>
        </motion.div>
      </div>
    );
  };