import Layout from "../components/Layout";
import Header from "../components/Header";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import Link from "next/link";

export default function social() {

    const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`

    return (
        <>
            <Header/>
            <Layout>
                <Link href='/blog/'>
                    <a className='btn btn-back'>Go Back</a>
                </Link>
                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
            </Layout>
        </>
    )
}