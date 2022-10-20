import {motion} from "framer-motion"
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {sortByDate} from "../utils";
import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";

import metaData from "../json/data.json"
import Post from "../components/Post";


export default function Home({posts}) {


    return (
        <>
            <Header/>
            <Layout>
                <div className="flex flex-col md:flex-row items-center justify-center gap-x-20 px-6 py-8 md:h-screen md:px-8">
                    <div className="max-w-sm pb-10">
                        <h5 className="text-2xl font-medium ml-0.5">I am </h5>
                        <h5 className="text-4xl font-medium">{metaData.mainPage.name}</h5>

                        <p className="pt-5 text-justify text-gray-600 ml-0.5">{metaData.mainPage.description}
                        </p>
                    </div>

                    <motion.div

                        className='flex gap-5 flex-wrap items-center justify-center md:justify-center md:py-5 md:flex-col'>
                        {/*<h3 className="font-medium text-2xl text-center">Check out my latest posts</h3>*/}
                        {posts.slice(0, 3).map((post, index) => (
                            <Post key={index} post={post}/>
                        ))}
                    </motion.div>
                </div>
            </Layout>
        </>
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

