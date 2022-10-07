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

                <div className="py-10 md:flex flex-col justify-center items-center md:py-10">
                    <Link href='/blog/' className="">
                        <a className='px-8 underline text-lg py-5'>Go Back</a>
                    </Link>
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


        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

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
        path.join('posts', slug + '.md'),
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