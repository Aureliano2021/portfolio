import { motion } from "framer-motion";

export const Curriculo = () => {
    const hoje = new Date();
    
    const idade = () => {
        let diaHoje = hoje.getDate();
        let mesAtual = hoje.getMonth();
        let anoAtual = hoje.getFullYear();
        let idadeAtual:number;
        const aniversario = {
            dia: 22, mes: 3, ano: 1994,
        };

        if (mesAtual >= aniversario.mes){
            if (mesAtual == aniversario.mes){
                diaHoje >= aniversario.dia ? idadeAtual = anoAtual-aniversario.ano : idadeAtual = (anoAtual-aniversario.ano)-1
            } else idadeAtual = anoAtual-aniversario.ano
        } else idadeAtual = (anoAtual-aniversario.ano)-1
        
        return (idadeAtual)
    }


    const dadosPessoais = [
        { id: 1, label: "Idade", 
            dado: `${idade()} anos`},
        { id: 2, label: "Estado Civil", dado: "Casado" },
        { id: 3, label: "Nacionalidade", dado: "Brasileira" },
        { id: 4, label: "Naturalidade", dado: "Sorocaba-SP" },
        { id: 5, label: "Telefone", dado: "(87)99108-1827" },
        { id: 6, label: "E-mail", dado: "aureliano.oliveira2011@gmail.com" }
    ]

    const xp = [
        { id: 1, cargo: "Coordenador Censitério de Subárea", empresa: "IBGE", periodo: "08/2022 - 07/2023" },
        { id: 2, cargo: "Aprendiz de Eletricista Industrial", empresa: "CONEST/RNEST", periodo: "02/2014 - 01/2015" }
    ]

    const academy = [
        {
            id: 1,
            curso: "Graduação Tecnológica em Análise e Desenvolvimento de Sistemas",
            instituicao: "Centro Universitário Estácio de Ribeirão Preto, SP",
            estado: "Concluído em Abril/2024"
        },
        {
            id: 2,
            curso: "Ensino Médio Completo",
            instituicao: "Escola Estadual Madre Iva Bezerra de Araújo",
            estado: "Concluído em Dezembro/2010"
        }
    ]

    const certifications = [
        {
            id: 1,
            curso: "Fundamentos de ReactJS",
            instituicao: "B7WEB",
            ch: "12",
            ano: "2025",
            link: "https://app.b7web.com.br/certificates/2e439ed2-0be6-4dab-89f3-1d2d3a613c03"
        },
        {
            id: 2,
            curso: "TailwindCSS",
            instituicao: "B7WEB",
            ch: "8",
            ano: "2025",
            link: "https://app.b7web.com.br/certificates/6b747259-5acd-4bb1-adfd-1c469cfe5c97"
        },
        {
            id: 3,
            curso: "TypeScript",
            instituicao: "B7WEB",
            ch: "5",
            ano: "2025",
            link: "https://app.b7web.com.br/certificates/31509c4e-9530-42e4-956a-ae386a0a5495"
        },
        {
            id: 4,
            curso: "JavaScript",
            instituicao: "B7WEB",
            ch: "66",
            ano: "2025",
            link: "https://app.b7web.com.br/certificates/3117813"
        },
        {
            id: 5,
            curso: "Git/Github",
            instituicao: "B7WEB",
            ch: "8",
            ano: "2025",
            link: "https://app.b7web.com.br/certificates/344298ba-172d-4ec2-ac93-fa1d1a40c8c7"
        },
        {
            id: 6, curso: "HTML5 e CSS3",
            instituicao: "B7WEB",
            ch: "92",
            ano: "2025",
            link: "https://app.b7web.com.br/certificates/8456645"
        },
        {
            id: 7,
            curso: "Lógica de Programação",
            instituicao: "DIO",
            ch: "4",
            ano: "2021",
            link: "https://www.dio.me/certificate/F577873D/share"
        }
    ]

    return (
        <motion.div className="flex flex-col items-center justify-center flex-grow" initial={{ opacity: 0}} animate={{ opacity: 1, y:0 }} exit={{ opacity: 0}} transition={{ duration: 1 }}>
        <div className="flex">
            <div className="flex-1/3 flex flex-col justify-center items-center h-screen p-4 bg-gray-700">
                <div className="w-30 h-30 bg-cover bg-top rounded-full my-4" style={{ backgroundImage: "url('/media/perfil.jpg')" }}></div>
                <h1 className="text-xl font-semibold mb-8">Aureliano Amorim de Oliveira</h1>
                <div className="text-sm text- p-2 bg-gray-900 rounded-lg">
                    <table>
                        <tbody>
                            {dadosPessoais.map((item) => (
                                <tr key={item.id} className="border-b border-gray-700 text-gray-500 last:border-gray-900">
                                    <td className="p-2">{item.label}</td>
                                    <td className="p-2">{item.dado}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="grid grid-cols-1 justify-center items-center flex-1/3 px-4 text-gray-300">
                <div className="flex flex-col py-2 justify-center items-center rounded-lg bg-gray-700">
                    <h2 className="text-lg font-semibold">Objetivo</h2>
                    <p className="text-center text-sm">Em busca de oportunidade como Desenvolvedor de Softwares ou uma oportunidade na área de Tecnologia da Informação.</p>
                </div>
                <div className="flex flex-col py-2 justify-center items-center rounded-lg bg-gray-700">
                    <h2 className="text-lg font-semibold">Histórico Profissional</h2>
                    <div className="text-center text-sm">
                        {xp.map((exp) => (
                            <ul className="p-2" key={exp.id}>
                                <li>{exp.cargo}</li>
                                <li>{exp.empresa}</li>
                                <li>{exp.periodo}</li>
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col py-2 justify-center items-center rounded-lg bg-gray-700">
                    <h2 className="text-lg font-semibold">Formação Acadêmica</h2>
                    <div className="text-center text-sm">
                        {academy.map((graduate) => (
                            <ul className="p-2" key={graduate.id}>
                                <li>{graduate.curso}</li>
                                <li>{graduate.instituicao}</li>
                                <li>{graduate.estado}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
            <div className="max-h-screen flex-1/3 text-center p-1 text-gray-300">
                <div className="flex flex-col py-2 justify-center items-center rounded-lg bg-gray-700">
                    <h2 className="text-lg font-semibold">Certificações</h2>
                    <table>
                        <thead className="text-md">
                            <tr>
                                <th className="px-2">Curso</th>
                                <th className="px-2">Instituição</th>
                                <th className="px-2">CH</th>
                                <th className="px-2">Conclusão</th>
                                <th className="px-2">Certificado</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {certifications.map((certification) => (
                                <tr key={certification.id} className="mb-2">
                                    <td className="p-2">{certification.curso}</td>
                                    <td>{certification.instituicao}</td>
                                    <td>{certification.ch}</td>
                                    <td>{certification.ano}</td>
                                    <td><a className="p-1.5 bg-blue-500 rounded-lg hover:bg-blue-600" href={certification.link} target="_blank">Link</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="h-50 flex flex-col my-2 py-2 justify-center items-center rounded-lg bg-gray-700">
                    <a
                        href="/media/curriculo.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-6 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded"
                    >
                        Abrir PDF
                    </a>
                </div>
            </div>
        </div>
        </motion.div>
    )
}