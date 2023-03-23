export function ButtonEffect({ id, name }: { id: string; name: string }) {
    return (
        <button
            id={id}
            className="mx-5 group relative px-2.5 py-1.5 inline-block text-xl text-bgBlack-700 font-black tracking-wide active:top-0.5 active:outline-none focus:outline-none max-sm:m-2"
        >
            {/* Button text */}

            <span className="block translate-3d-14S group-hover:translate-3d-h-14">
                {name}
            </span>

            {/* Rigth line */}
            <span
                className="absolute -bottom-1 -top-1 -right-1 w-0.5 bg-gray-800 scale-3d-101 transition-transform delay-20 duration-200 origin-top group-hover:scale-3d-111 group-hover:delay-100 group-hover:duration-200 group-hover:origin-bottom"
                aria-hidden="true"
            />
            {/* Top line */}
            <span
                className="absolute -top-1 -left-1 -right-1 h-0.5 bg-gray-800 scale-3d-011 transition-transform delay-200 duration-150 ease-linear origin-left group-hover:scale-3d-111 group-hover:delay-200 group-hover:duration-150 group-hover:origin-right"
                aria-hidden="true"
            />
            {/* Left line */}
            <span
                className="absolute -bottom-1 -top-1 -left-1 w-0.5 bg-gray-800 scale-3d-101 transition-transform delay-350 duration-150 ease-linear origin-bottom group-hover:scale-3d-111 group-hover:delay-350 group-hover:duration-200 group-hover:origin-top"
                aria-hidden="true"
            />
            {/* Bottom line */}
            <span
                className="absolute -bottom-1 -left-1 -right-1 h-0.5 bg-gray-800 scale-3d-011 transition-transform duration-100 origin-right group-hover:scale-3d-111 group-hover:delay-500 group-hover:duration-500 group-hover:origin-left"
                aria-hidden="true"
            />
            {/* Button ::after */}
            <span
                className="absolute -bottom-1 left-3.5 right-3.5 h-0.5 bg-bgMint-500 transition-after-14 origin-left group-hover:scale-3d-011 group-hover:-right-1 group-hover:-left-1 group-hover:origin-right group-hover:transition-after-h-14"
                aria-hidden="true"
            />
        </button>
    );
}
