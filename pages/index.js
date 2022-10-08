import {motion} from "framer-motion"
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {sortByDate} from "../utils";
import PostIndex from "../components/PostIndex";
import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";

import metaData from "../json/data.json"


export default function Home({posts}) {


    return (
        <>
            <Header/>
            <Layout>
                <div className="md:flex md:items-center md:justify-center md:gap-x-20 px-4">
                    <div className="max-w-sm pb-10">
                        <h5 className="text-3xl font-medium ml-0.5">I am </h5>
                        <h5 className="text-5xl font-medium">{metaData.mainPage.name}</h5>

                        <p className="pt-5 text-justify text-gray-600 ml-0.5">{metaData.mainPage.description}
                        </p>
                    </div>

                    <motion.div

                        className='flex gap-5 flex-wrap md:justify-center md:py-5 mb-20 md:flex-col'>
                        {/*<h3 className="font-medium text-2xl text-center">Check out my latest posts</h3>*/}
                        {posts.slice(0, 3).map((post, index) => (
                            <PostIndex key={index} post={post}/>
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

