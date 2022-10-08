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

export default function PostPage({
                                     frontmatter: {title, date, cover_image},
                                     slug,
                                     content,
                                 }) {
    return (
        <>
            <Header/>

                <Layout>
                    <div className="md:flex flex-col justify-center items-center md:py-10">
                        {/*<Link href='/blog/'>*/}
                        {/*    <a className='inline-flex items-start justify-start py-2 px-3 text-sm font-medium text-center text-gray-800 border border-gray-200 border-2 rounded-lg mb-5 font-bold ml-8'>go back</a>*/}
                        {/*</Link>*/}
                        <div className="md:p-6 md:bg-white md:rounded-lg md:border md:border-gray-200 md:shadow-md">
                            <h1 className='px-8 text-3xl py-2'>{title}</h1>
                            <div className='px-8 post-date'>Posted on {date}</div>
                            <ReactMarkdown
                                remarkPlugins={[remarkMath]}
                                rehypePlugins={[rehypeKatex]}
                                className="prose prose-sm lg:prose-lg px-8 py-8"
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