import { CardI } from "../../../infrastructure/types/cardType";

export function Card(card: CardI) {
    const value: string =
        card.flexRow === false
            ? "lg:justify-end lg:flex-row-reverse"
            : "flex-row";

    return (
        <div
            className={`flex lg:${value} flex-col justify-center items-center gap-4 m-0 max-sm:w-80 max-md:w-[25rem] lg:${value} md:w-[30rem]`}
        >
            <img
                className="border-4 m-2 border-bgBlack-700 max-sm:w-72 max-md:w-80 max-lg:w-[20rem] lg:w-[18rem] md:w-[20rem] xl:w-[30rem]"
                src={card.image}
                alt={`imagen del proyecto ${card.title}`}
            />

            <div className="m-8 flex flex-col items-center max-sm:w-72 max-md:w-80 max-lg:w-[25rem] lg:w-[15rem] md:w-[30rem] xl:w-[30rem]">
                <h2 className="mb-4 text-3xl tracking-tight font-extrabold uppercase text-bgMint-900">
                    {card.title}
                </h2>

                {card.front === true ? (
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-bgMint-700">
                        Front
                    </span>
                ) : (
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-red-500 rounded">
                        Back
                    </span>
                )}

                <p className="mb-6 text-bgBlack-700 font-bold text-lg p-2 xl:w-[30rem] md:w-[18rem] xl:text-2xl">
                    {card.description}
                </p>

                <div className="flex m-4 max-sm:m-0 max-sm:mr-24 max-[540px]:w-32">
                    <a
                        target={"_blank"}
                        rel="noopener noreferrer"
                        href={card.webLink}
                        className="m-4 relative px-6 py-3 font-bold text-black group"
                    >
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-bgMint-800 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                        <span className="relative">Web</span>
                    </a>

                    <a
                        target={"_blank"}
                        rel="noopener noreferrer"
                        href={card.codeLink}
                        className="m-4 relative px-6 py-3 font-bold text-black group"
                    >
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-bgMint-800 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                        <span className="relative">Codigo</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
