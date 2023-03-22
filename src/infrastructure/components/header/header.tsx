import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { Menu } from "../../menu/menu";

export function Header() {
    return (
        <header className="bg-bgBlack-500 h-screen w-[12rem] flex flex-col place-content-between items-center fixed">
            <Menu />

            <section className="text-white p-4 font-[Raleway] text-sm font-semibold">
                <div className="flex flex-row items-center cursor-pointer hover:text-blue-700">
                    <AiFillLinkedin></AiFillLinkedin>
                    <a
                        href="https://www.linkedin.com/in/luis-enr-diaz-garcia/"
                        className="p-2"
                    >
                        Linkedin
                    </a>
                </div>

                <div className="flex flex-row items-center cursor-pointer hover:text-red-700">
                    <SiGmail></SiGmail>
                    <a href="mailto:luisenrique0020@gmail.com" className="p-2">
                        Gmail
                    </a>
                </div>

                <div className="flex flex-row items-center cursor-pointer hover:text-bgMint-700">
                    <AiFillGithub></AiFillGithub>
                    <a href="https://github.com/LuisEnrDiaz" className="p-2">
                        Github
                    </a>
                </div>
            </section>
        </header>
    );
}
