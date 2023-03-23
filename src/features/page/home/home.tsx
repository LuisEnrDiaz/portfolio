import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

import { abilitiesI } from "../../../infrastructure/types/abilitiesType";
import { ButtonEffect } from "../../utils/buttonEffect/buttonEffect";

export function Home() {
    const abilities: abilitiesI[] = [
        { id: "1", name: "React" },
        { id: "2", name: "Jest" },
        { id: "3", name: "Redux" },
        { id: "4", name: "Css" },
        { id: "5", name: "Html" },
        { id: "6", name: "TypeScript" },
        { id: "7", name: "NodeJS" },
        { id: "8", name: "ExpressJS" },
        { id: "9", name: "MongoDB" },
        { id: "10", name: "Tailwind" },
    ];
    //justify - between;
    return (
        <main className="body w-full p-4 ml-48 h-screen flex flex-col items-center max-sm:items-center max-sm:ml-0 max-sm:mt-20 max-md:ml-40 sm:justify-center max-md:items-center">
            <img
                className="max-sm:p-0 max-sm:w-0 max-sm:absolute max-sm:right-0max-sm:top-0 sm:p-4 sm:w-40 sm:absolute sm:right-5 sm:top-5"
                src="./assets/logo.png"
                alt=""
            />

            <div className="md:left-48 md:absolute text-lg font-bold ml-6 text-start max-sm:mt-20 max-md:mb-20">
                <p className="text-7xl font-black m-1 max-sm:text-5xl ">
                    Hola soy Luis Enrique,
                </p>
                <p className="text-4xl m-1 max-sm:text-2xl">
                    FullStack developer
                </p>

                <section className="flex flex-row text-black p-4 text-sm font-semibold m-4">
                    <div className="flex flex-row items-center cursor-pointer hover:text-blue-700">
                        <AiFillLinkedin></AiFillLinkedin>
                        <a
                            target={"_blank"}
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/luis-enr-diaz-garcia/"
                            className="p-2"
                        >
                            Linkedin
                        </a>
                    </div>

                    <div className="flex flex-row items-center cursor-pointer hover:text-red-700">
                        <SiGmail></SiGmail>
                        <a
                            target={"_blank"}
                            rel="noopener noreferrer"
                            href="mailto:luisenrique0020@gmail.com"
                            className="p-2"
                        >
                            Gmail
                        </a>
                    </div>

                    <div className="flex flex-row items-center cursor-pointer hover:text-bgMint-700">
                        <AiFillGithub></AiFillGithub>
                        <a
                            target={"_blank"}
                            rel="noopener noreferrer"
                            href="https://github.com/LuisEnrDiaz"
                            className="p-2"
                        >
                            Github
                        </a>
                    </div>
                </section>
            </div>

            <div className="m-10 flex flex-wrap justify-center absolute bottom-0 max-sm:m-4 max-sm:mt-12  max-lg:content-center">
                {abilities.map((e) => (
                    <ButtonEffect id={e.id} name={e.name} />
                ))}
            </div>
        </main>
    );
}
