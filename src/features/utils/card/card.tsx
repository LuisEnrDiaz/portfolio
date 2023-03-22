export function Card({
    image,
    title,
    description,
    webLink,
    codeLink,
    flexRow,
}: {
    image: string;
    title: string;
    description: string;
    webLink: string;
    codeLink: string;
    flexRow: boolean;
}) {
    const value =
        flexRow === false ? "justify-end flex-row-reverse" : "flex-row";

    return (
        <div className={`flex ${value} w-[80rem] items-center gap-4 m-8`}>
            <img
                className="w-[40rem] border-4 border-bgBlack-700 "
                src={image}
                alt={`imagen del proyecto ${title}`}
            />

            <div className="w-[40rem] m-8 ">
                <h2 className="mb-4 text-3xl tracking-tight font-extrabold uppercase text-bgMint-900">
                    {title}
                </h2>

                <p className="mb-6 text-bgBlack-700 font-bold text-lg">
                    {description}
                </p>

                <div className="flex m-4 max-[540px]:w-32">
                    <a
                        href={webLink}
                        className="m-4 relative px-6 py-3 font-bold text-black group"
                    >
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-bgMint-800 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                        <span className="relative">Web</span>
                    </a>

                    <a
                        href={codeLink}
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
