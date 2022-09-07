import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
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
                <div className="h-screen">
                    <h3 className="flex justify-center items-center py-8 text-2xl">Blog posts</h3>
                    <div className='flex gap-10 flex-wrap md:justify-center md:py-20'>
                        {posts.map((post, index) => (
                            <Post key={index} post={post}/>
                        ))}
                    </div>
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