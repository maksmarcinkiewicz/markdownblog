import Link from "next/link";
import Navigation from "./Navigation";
import metaData from "../json/data.json"

export default function Header() {
    return (
        <>
            <header
                className="
        w-full  flex flex-row justify-between items-center
        h-16 md:h-20 z-50
        pl-8 pr-4 sm:pl-14 sm:pr-6 md:pl-32 md:pr-24 lg:pl-40 lg:pr-32 xl:pl-72 xl:pr-64 2xl:px-96
        text-black bg-white border-b border-black
    "
            >
                <Link href="/">
                    <a>
                        <span className="show sm:hide text-xl font-medium">{metaData.header.shortName}</span>
                        <span className="hide sm:show sm:text-2xl">{metaData.header.name}</span>
                    </a>
                </Link>
                <div className="flex flex-row items-center">
                    <Navigation/>

                </div>
            </header>
        </>
    )
}