export function Title({ title, width }: { title: string; width: string }) {
    const upperTitle = title.toUpperCase();

    return (
        <div className="w-auto">
            <h1
                className={`font-black border-b-8 border-bgMint-600 text-3xl ${width} m-4`}
            >
                {upperTitle}
            </h1>
        </div>
    );
}
