import { Menu } from "../../menu/menu";

export function Header() {
    return (
        <header className="bg-bgBlack-500 h-screen w-[12rem] flex max-sm:absolute max-sm:h-20 max-sm:w-full max-sm:flex-row max-sm:justify-center max-md:w-40 md:fixed ">
            <Menu />
        </header>
    );
}
