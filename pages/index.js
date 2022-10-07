import {motion} from "framer-motion"
import Link from 'next/link'
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {sortByDate} from "../utils";
import Post from "../components/Post";
import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";

export default function Home({posts}) {

    return (
        <>
            <Header/>
           <Layout>
               <div className="max-w-sm pb-10">
                   <h5 className="text-2xl font-medium">Hi <span className="waving-hand">👋</span></h5>
                   <h5 className="text-2xl font-medium">my name is Norton Bright </h5>

                   <p className="pt-5 text-justify font-normal">I am a graduate student in both
                       Mathematics (Statistics) and Data Analysis & Data Processing
                       at the Adam Mickiewicz University, Poznań. Before that, I studied at the University of
                       Warsaw, where I obtained my bachelor's degree in Mathematics.</p>
               </div>

               <div className='flex gap-5 flex-wrap md:justify-center md:py-20 mb-20'>
                   <h3 className="font-medium text-2xl text-center">Check out my latest posts</h3>
                   {posts.map((post, index) => (
                       <Post key={index} post={post}/>
                   ))}
               </div>
           </Layout>

        </>
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