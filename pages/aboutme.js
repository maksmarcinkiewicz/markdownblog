import Layout from "../components/Layout";
import Header from "../components/Header";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import Link from "next/link";
import Image from 'next/image'

import mypic from "../public/avatar-e6624e0a678137566054d3ba137959ab.jpg"
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";


const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`

export default function aboutme() {


    return (
        <>
            <Header/>
            <Layout>
                <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    className="prose prose-sm lg:prose-lg px-8 py-8"

                >{markdown}
                </ReactMarkdown>

            </Layout>
        </>
    )
}