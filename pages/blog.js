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
                <div className="px-8 py-8 h-screen sm:flex sm:items-center sm:justify-center">
                    {/*<h3 className="md:text-4xl md:py-10 text-2xl py-5">{metaData.blog.title}</h3>*/}
                    <div className='flex flex-wrap gap-5 pb-24 sm:grid sm:grid-cols-2'>
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