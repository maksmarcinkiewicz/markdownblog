import { motion } from "framer-motion"
import Link from 'next/link'
export default function Home() {
    return (
        <>
            <div className="flex flex-col gap-20 items-center h-screen justify-center">
                <div className="">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}>
                        <h3 className="flex justify-center text-4xl">Jakub</h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}>
                        <h3 className="flex justify-center text-4xl">Szymkowiak</h3>
                    </motion.div>
                </div>
                <div className="flex flex-row gap-5 text-xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.button
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.9}}
                        >
                            <Link href={`/blog/`}>
                                <a>blog</a>
                            </Link>
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}>
                        <motion.button
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.9}}
                        >
                            <Link href={`/technologies`}>
                                <a>technologies</a>
                            </Link>
                        </motion.button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}>
                        <motion.button
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.9}}
                        >
                            <Link href={`/social`}>
                                <a>social</a>
                            </Link>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </>
    )
}