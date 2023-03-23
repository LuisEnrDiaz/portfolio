export function DescriptionText({ children }: { children: JSX.Element }) {
    return (
        <div className="mb-4 text-black font-semibold text-center max-sm:w-56 max-sm:text-base max-md:w-96 lg:w-[20rem] lg:text-xl xl:w-[45rem]">
            {children}
        </div>
    );
}
