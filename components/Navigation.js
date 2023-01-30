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
                        <a className={`${name == 'about me' ? 'mr-0' : 'mr-4'} flex flex-col sm:text-lg`}>
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