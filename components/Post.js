import Link from 'next/link'
import {motion} from "framer-motion";

export default function Post({post}) {
    return (
        <div
            className='p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow'>
            <div className='text-sm dark:text-gray-600'>Posted on {post.frontmatter.date}</div>

            <h3 className="mb-2 text-lg font-bold tracking-tight text-gray-900">{post.frontmatter.title}</h3>

            <p className="mb-2 font-normal text-sm text-justify text-gray-700 dark:text-gray-600">{post.frontmatter.excerpt}</p>

            <Link href={`/blog/${post.slug}`}>
                <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                >
                    <a className='inline-flex items-start justify-start py-2 px-3 text-sm font-medium text-center text-gray-800 shadow rounded-lg border border-gray-200 '>Read
                        More</a>
                        
                </motion.button>
              
            </Link>
        </div>
    )
}