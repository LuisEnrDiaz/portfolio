import { ButtonEffect } from "../../utils/buttonEffect/buttonEffect";

export function Home() {
    const abilities = [
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

    return (
        <main className="body w-full p-4 ml-48 h-screen flex flex-col  justify-between">
            <div>
                <img
                    className="p-4 w-40 absolute right-5 top-5"
                    src="./assets/logo.png"
                    alt=""
                />
            </div>

            <div className="text-lg font-bold ml-6 text-start">
                <p className="text-7xl font-black m-1">
                    Hola soy Luis Enrique,
                </p>
                <p className="text-4xl m-1">FullStack developer</p>
            </div>

            <div className="m-10 flex flex-row justify-center bottom-0">
                {abilities.map((e) => (
                    <ButtonEffect id={e.id} name={e.name} />
                ))}
            </div>
        </main>
    );
}
