import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import {sortByDate} from '../utils'

import React from 'react'
import Layout from "../components/Layout";
import Header from "../components/Header";

export default function blog({posts}) {
    return (

        <>
            <Header/>

            <Layout>
                    <div className='flex gap-5 flex-wrap md:justify-center md:py-20 mb-20'>
                        <h3 className="font-medium text-2xl text-center">Check out my latest posts</h3>
                        {posts.map((post, index) => (
                            <Post key={index} post={post}/>
                        ))}
                    </div>
            </Layout></>
    )
}

export async function getStaticProps() {

    const files = fs.readdirSync(path.join('posts'))

    const posts = files.map((filename) => {

        const slug = filename.replace('.md', '')

        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
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