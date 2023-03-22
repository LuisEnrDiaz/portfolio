export function DescriptionText({ children }: { children: JSX.Element }) {
    return (
        <div className="mb-4 text-black font-semibold text-xl w-[55rem] text-center">
            {children}
        </div>
    );
}
