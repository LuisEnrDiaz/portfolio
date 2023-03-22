export function Title({ title, width }: { title: string; width: string }) {
    return (
        <div className="w-auto">
            <h1
                className={`font-black border-b-8 border-bgMint-600 text-3xl uppercase ${width} m-4`}
            >
                {title}
            </h1>
        </div>
    );
}
