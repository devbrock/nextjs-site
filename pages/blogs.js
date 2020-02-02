import React from 'react'
import Layout from '../components/Layout'
import BlogList from '../components/BlogList'
import matter from 'gray-matter'


export default function blogs(props) {
    return (
        <>
            <Layout>
                <div className='block'>
                    <div className='container' >
                        <h1 className="blue ">Read My Blog Posts</h1>
                    </div>
                    <div className='container' style={{ marginTop: '2em', justifyContent: 'flex-start' }}>
                        <BlogList allBlogs={props.allBlogs} />
                    </div>
                </div>
            </Layout>
        </>
    )
}


// src/pages/index.js
blogs.getInitialProps = async function () {
    // get all .md files from the src/posts dir
    const posts = (context => {
        // grab all the files matching this context
        const keys = context.keys()
        // grab the values from these files
        const values = keys.map(context)
        // go through each file
        const data = keys.map((key, index) => {
            // Create slug from filename
            const slug = key
                .replace(/^.*[\\\/]/, '')
                .split('.')
                .slice(0, -1)
                .join('.')
            // get the current file value
            const value = values[index]
            // Parse frontmatter & markdownbody for the current file
            const document = matter(value.default)
            // return the .md content & pretty slug
            return {
                document,
                slug,
            }
        })
        // return all the posts
        return data
    })(require.context('../posts', true, /\.md$/))

    return {
        allBlogs: posts,
    }
}