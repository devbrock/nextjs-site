import React from 'react'
import Layout from '../components/Layout'

export default function blogs() {
    return (
        <>
            <Layout>
                <h1 className="yellow">Most Recent Blogs</h1>
                <div className='container'>
                    <a href='/posts/blog1' className="pink" style={{ fontSize: '1.3rem', textDecoration: 'none' }}>Blog Post 1</a>
                </div>
            </Layout>
        </>
    )
}
