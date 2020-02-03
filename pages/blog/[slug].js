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
    const markdownBody = props.content

    let title = ""
    let author = ""
    let date = ""
    // const frontmatter = props.data

    if (props.data) {
        // const { title, author, date } = props.data;
        title = props.data.title
        author = props.data.author
        date = props.data.date
    }



    return (
        <Layout siteTitle={props.siteTitle}>
            <div className="container">
                <div className="block post">
                    <h1>{title}</h1>
                    <h4>{author} | {reformatDate(date)}</h4>
                    <div>
                        <ReactMarkdown source={markdownBody} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

BlogTemplate.getInitialProps = async (ctx) => {
    const { slug } = ctx.query

    if (slug) {
        const content = await import(`../../posts/${slug}.md`)
        const data = matter(content.default);
        return { ...data }
    }
    return {}
}

export default BlogTemplate