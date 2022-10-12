import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import Link from 'next/link'
import Header from "../../components/Header";
import 'katex/dist/katex.min.css'
import Layout from "../../components/Layout";
import {motion} from "framer-motion";
import Image from "next/image";
import BackArrow from "./go-back-arrow-svgrepo-com.svg"

export default function PostPage({
                                     frontmatter: {title, date, cover_image},
                                     slug,
                                     content,
                                 }) {
    return (
        <>
            <Header/>


            <Layout>

                    <div className="md:flex md:flex-col md:items-center p-4">
                        {/*<Link href={`/blog/`}>*/}
                        {/*    <motion.button*/}
                        {/*        whileHover={{scale: 1.1}}*/}
                        {/*        whileTap={{scale: 0.9}}*/}
                        {/*        className="mx-4 my-5"*/}
                        {/*    >*/}
                        {/*        <span className="flex gap-2"> <BackArrow className="w-4"/>go back</span>*/}
                        {/*    </motion.button>*/}

                        {/*</Link>*/}
                        <div className="bg-white rounded-lg border border-gray-200 shadow-md pt-5">
                            <h1 className='px-4 text-3xl py-2'>{title}</h1>
                            <div className='px-4 post-date'>Posted on {date}</div>
                            <ReactMarkdown
                                remarkPlugins={[remarkMath]}
                                rehypePlugins={[rehypeKatex]}
                                className="prose prose-sm lg:prose-lg px-4 py-8"
                            >{content}</ReactMarkdown>
                        </div>
                    </div>

            </Layout>


        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('markdown/posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params: {slug}}) {
    const markdownWithMeta = fs.readFileSync(
        path.join('markdown/posts', slug + '.md'),
        'utf-8'
    )

    const {data: frontmatter, content} = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}