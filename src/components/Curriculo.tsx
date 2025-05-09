export const Curriculo = () => {

    const dadosPessoais = [
        { id: 1, label: "Idade", dado: "31 anos" },
        { id: 2, label: "Estado Civil", dado: "Casado" },
        { id: 3, label: "Nacionalidade", dado: "Brasileira" },
        { id: 4, label: "Naturalidade", dado: "Sorocaba-SP" },
        { id: 5, label: "Telefone", dado: "(87)99108-1827" },
        { id: 6, label: "E-mail", dado: "aureliano.oliveira2011@gmail.com" }
    ]

    const xp = [
        {id: 1, cargo: "Coordenador Censitério de Subárea", empresa: "IBGE", periodo:"08/2022 - 07/2023"},
        {id: 2, cargo: "Aprendiz de Eletricista Industrial", empresa:"CONEST/RNEST", periodo: "02/2014 - 01/2015"}
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

    const certification = [
        {
            id: 1, 
            curso: "Fundamentos de ReactJS", 
            instituicao: "B7WEB", 
            ch: "12 horas", 
            ano: "2025", 
            link: "https://app.b7web.com.br/certificates/2e439ed2-0be6-4dab-89f3-1d2d3a613c03"
        },
        {
            id: 2, 
            curso: "TailwindCSS", 
            instituicao: "B7WEB", 
            ch: "8 horas", 
            ano: "2025", 
            link: "https://app.b7web.com.br/certificates/6b747259-5acd-4bb1-adfd-1c469cfe5c97"
        },
        {
            id: 3, 
            curso: "TypeScript", 
            instituicao: "B7WEB", 
            ch: "5 horas", 
            ano: "2025", 
            link: "https://app.b7web.com.br/certificates/31509c4e-9530-42e4-956a-ae386a0a5495"
        },
        {
            id: 4, 
            curso: "JavaScript", 
            instituicao: "B7WEB", 
            ch: "66 horas", 
            ano: "2025", 
            link: "https://app.b7web.com.br/certificates/3117813"
        },
        {
            id: 5, 
            curso: "Git/Github", 
            instituicao: "B7WEB", 
            ch: "8 horas", 
            ano: "2025", 
            link: "https://app.b7web.com.br/certificates/344298ba-172d-4ec2-ac93-fa1d1a40c8c7"
        },
        {
            id: 6, curso: "HTML5 e CSS3", 
            instituicao: "B7WEB", 
            ch: "92 horas", 
            ano: "2025", 
            link: "https://app.b7web.com.br/certificates/8456645"
        },
        {
            id: 7, 
            curso: "Lógica de Programação", 
            instituicao: "DIO", 
            ch: "4 horas", 
            ano: "2021"
        }
    ]

    return (
        <div className="flex">
            <div className="border flex-1/3 flex flex-col justify-center items-center h-screen p-4 bg-gray-700">
                <div className="w-30 h-30 bg-cover bg-top rounded-full my-4" style={{ backgroundImage: "url('/media/perfil.jpg')" }}></div>
                <h1 className="text-xl font-semibold mb-8">Aureliano Amorim de Oliveira</h1>
                <div className="text-sm text- p-2 bg-gray-900 rounded-lg">
                <table>
                    <tbody className="border-t border-gray-700">
                        {dadosPessoais.map((item) => (
                            <tr key={item.id} className="border-b border-gray-700 text-gray-500">
                                <td className="p-2">{item.label}</td>
                                <td className="p-2">{item.dado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
            <div className="border flex-1/3">

            </div>
            <div className="border flex-1/3">

            </div>
        </div>
    )
}