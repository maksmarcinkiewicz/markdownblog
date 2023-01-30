import Link from "next/link";
import Navigation from "./Navigation";
import metaData from "../json/data.json"

export default function Header() {
    return (
        <>
            <header
                className="
        w-full  flex flex-row justify-between px-8 items-center sm:px-0 sm:justify-evenly
        h-20 
        text-black bg-white border-b border-black
    "
            >
                <Link href="/">
                    <a className="sm:pl-8">
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