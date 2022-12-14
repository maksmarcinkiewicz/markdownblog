import {AnimateSharedLayout} from "framer-motion";
import Link from "next/link";
import {isActiveLink} from "../utils";
import { useRouter } from 'next/dist/client/router'
import {motion} from "framer-motion";

const links = [

    {
        name: 'blog',
        href: '/blog',
    },
    // {
    //     name: 'technologies',
    //     href: '/technologies',
    // },
    {
        name: 'about me',
        href: '/aboutme',
    },
]

export default function Navigation() {
    const router = useRouter()
    return (
        <AnimateSharedLayout>
            <nav className="flex">
                {links.map(({ name, href }) => (
                    <Link key={name} href={href}>
                        <a className="mr-4 sm:mr-8 flex flex-col sm:text-lg">
                            {name}
                            {isActiveLink(href, router.pathname) && (
                                <motion.div
                                    layoutId="navigation-underline"
                                    className="navigation-underline"
                                    animate
                                />
                            )}
                        </a>
                    </Link>
                ))}
            </nav>
        </AnimateSharedLayout>
    )


}