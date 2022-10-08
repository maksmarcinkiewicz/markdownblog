import Layout from "../components/Layout";
import Header from "../components/Header";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import fs from "fs";
import path from "path";


const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`

export default function aboutme({markdownData}) {
console.log(markdownData)
    return (
        <>
            <Header/>
            <Layout>
                <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    className="prose prose-sm lg:prose-lg px-8 py-8"

                >{markdownData}
                </ReactMarkdown>

            </Layout>
        </>
    )
}

export async function getStaticProps() {

const markdownWithmeta = fs.readFileSync(path.join('markdown/aboutme', 'aboutme.md'), 'utf-8')
console.log(markdownWithmeta)

    return {
        props: {
            markdownData: markdownWithmeta
        }
    }
}
