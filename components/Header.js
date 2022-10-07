import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <>
            <header
                className="
        w-full  flex flex-row justify-between items-center
        h-16 md:h-20 z-50
        px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
        text-black bg-white border-b-2 border-gray-800
    "
            >
                <Link href="/">
                    <a>
                        <span className="show sm:hide text-xl font-medium">NB</span>
                        <span className="hide sm:show sm:text-2xl">Norton Bright</span>
                    </a>
                </Link>
                <div className="flex flex-row items-center">
                    <Navigation/>

                </div>
            </header>
        </>
    )
}