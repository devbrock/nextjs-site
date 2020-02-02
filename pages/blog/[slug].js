import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'

function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4);
}

export default function BlogTemplate(props) {
    // data from getInitialProps
    const markdownBody = props.content
    const frontmatter = props.data
    return (
        <Layout siteTitle={props.siteTitle}>
            <div className="container">
                <div className="block post">
                    <h1>{frontmatter.title}</h1>
                    <h4>{frontmatter.author} | {reformatDate(frontmatter.date)}</h4>
                    <div>
                        <ReactMarkdown source={markdownBody} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

BlogTemplate.getInitialProps = async function (context) {
    // context contains the query param
    const { slug } = context.query
    // grab the file in the posts dir based on the slug
    const content = await import(`../../posts/${slug}.md`)
    // also grab the config file so we can pass down siteTitle
    // const config = await import(`../../data/config.json`)
    //gray-matter parses the yaml frontmatter from the md body
    const data = matter(content.default)
    return {
        // siteTitle: config.title,
        ...data,
    }
}