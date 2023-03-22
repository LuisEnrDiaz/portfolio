import { Link } from "react-router-dom";

export function Menu() {
    const upperTitle = (text: string) => {
        return text.toUpperCase();
    };

    const menuOptions = [
        { id: "1", path: "home", label: "inicio" },
        { id: "2", path: "my-projects", label: "MIS PROYECTOS" },
        { id: "3", path: "about-me", label: "ACERCA DE MI" },
    ];
    return (
        <nav className="text-white font-[Raleway] text-lg font-semibold m-4">
            <ul>
                {menuOptions.map((item) => (
                    <li
                        className="p-4 border-b-2 border-b-bgBlack-300 "
                        key={item.id}
                    >
                        <Link to={item.path}>{upperTitle(item.label)}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
