import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import {sortByDate} from '../utils'

import React from 'react'
import Layout from "../components/Layout";
import Header from "../components/Header";

import metaData from "../json/data.json"


export default function blog({posts}) {
    return (

        <>
            <Header/>

            <Layout>
                <div className="px-8 py-8 h-screen sm:flex sm:items-center">
                    {/*<h3 className="md:text-4xl md:py-10 text-2xl py-5">{metaData.blog.title}</h3>*/}
                    <div className='flex gap-5 flex-wrap md:justify-center justify-center sm:grid sm:px-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-16 xl:px-32 2xl:px-64'>
                        {posts.map((post, index) => (
                            <Post key={index} post={post}/>
                        ))}
                    </div>
                </div>

            </Layout></>
    )
}

export async function getStaticProps() {

    const files = fs.readdirSync(path.join('markdown/posts'))

    const posts = files.map((filename) => {

        const slug = filename.replace('.md', '')

        const markdownWithMeta = fs.readFileSync(
            path.join('markdown/posts', filename),
            'utf-8'
        )

        const {data: frontmatter} = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }
    })

    return {
        props: {
            posts: posts.sort(sortByDate),
        },
    }
}