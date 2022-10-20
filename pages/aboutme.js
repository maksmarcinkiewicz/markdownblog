import Layout from "../components/Layout";
import Header from "../components/Header";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import fs from "fs";
import path from "path";
import ContactForm from "../components/ContactForm";


export default function aboutme({markdownData}) {
    return (
        <>
            <Header/>
            <Layout>
                <div className="flex flex-col items-start md:items-center w-full pt-5 md:justify-center md:gap-10
                    px-4
                    h-screen">
                    <ReactMarkdown
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                        className="prose prose-sm lg:prose-lg px-6 py-8 text-justify"

                    >{markdownData}
                    </ReactMarkdown>
            
                </div>
            </Layout>
        </>
    )
}

export async function getStaticProps() {

    const markdownWithMeta = fs.readFileSync(path.join('markdown/aboutme', 'aboutme.md'), 'utf-8')

    return {
        props: {
            markdownData: markdownWithMeta
        }
    }
}
