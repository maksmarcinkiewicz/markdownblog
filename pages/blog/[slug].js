import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import Header from "../../components/Header";
import 'katex/dist/katex.min.css'
import Layout from "../../components/Layout";
import {motion} from "framer-motion";


export default function PostPage({
                                     frontmatter: {title, date, cover_image},
                                     slug,
                                     content,
                                 }) {
    return (
        <>
            

            <Header/>
           
            <Layout>
                    <div className="sm:flex sm:flex-col sm:items-center pt-6">
                 
                        <div className="">
                        
                            <h1 className='px-8 text-3xl py-2 font-bold'>{title}</h1>
                            <div className='px-8 post-date'>Posted on {date}</div>
                            <ReactMarkdown
                                remarkPlugins={[remarkMath]}
                                rehypePlugins={[rehypeKatex]}
                                className="prose prose-sm sm:prose-md lg:prose-lg xl:prose-xl px-8 py-8 text-justify"
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