export const MenuButton = ({setActiveButton}: { setActiveButton: (id: number) => void }) => {
    const menuItems = [
        {id: 1, name: "Início"},
        {id: 2, name: "Sobre Mim"},
        {id: 3, name: "Portfólio"},
        {id: 4, name: "Serviços"},
        {id: 5, name: "Contato"},
        {id: 6, name: "Currículo"}
    ];

    const handleItemClick = (item: { id: number; name: string}) => {
        setActiveButton(item.id)
    }

    return (
        <nav className="h-screen flex flex-col items-center">
            <div className="w-40 h-40 bg-cover bg-center rounded-full my-4" style={{ backgroundImage: "url('/media/Logo.jpeg')" }}>
            </div>
            <ul className="w-full flex flex-grow flex-col justify-center items-center text-center border-b">
                {menuItems.map((item) => (
                    <li onClick={() => handleItemClick(item)} className='w-full flex-grow flex items-center justify-center cursor-pointer font-semibold text-xl border-t hover:bg-gray-700' key={item.id}>
                        <a>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}