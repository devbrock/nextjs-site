import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'


function BlogTemplate(props) {

    function reformatDate(fullDate) {
        const date = new Date(fullDate)
        return date.toDateString().slice(4);
    }

    // data from getInitialProps
    const { content, data: { title, author, date } } = props

    return (
        <Layout siteTitle={props.siteTitle}>
            <div className="container">
                <div className="block post">
                    <h1>{title}</h1>
                    <h4>{author} | {reformatDate(date)}</h4>
                    <div>
                        <ReactMarkdown source={content} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

BlogTemplate.getInitialProps = async (ctx) => {
    const {
        query: { slug }
    } = ctx

    console.log({ slug })

    if (slug) {
        const content = await import(`../../posts/${slug}.md`)
        const data = matter(content.default);
        return { ...data }
    }
    return {}
}

export default BlogTemplate