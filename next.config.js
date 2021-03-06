const glob = require("glob")

module.exports = {
    webpack: function (config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        })
        return config
    },

    exportPathMap: async function (defaultPathMap) {
        // get all .md files in the posts dir
        const blogPostFiles = glob.sync("src/posts/**/*.md")

        // remove path and extension to leave filename only
        const blogPostSlugs = blogPostFiles.map(file =>
            file
                .split("/")[2]
                .replace(/ /g, "-")
                .slice(0, -3)
                .trim()
        )
        console.log("slugs")
        console.log(blogPostSlugs)

        const createPathObject = (pathObject, slug) => {
            return {
                ...pathObject,
                [`/posts/${slug}`]: {
                    page: "/posts/[slug]",
                    query: { slug: slug }
                }
            }
        }
        console.log("createpathobject")
        console.log(createPathObject)

        const blogPostsPathMap = blogPostSlugs.reduce(createPathObject, {})
        console.log("blog posts path map")
        console.log(blogPostsPathMap)

        return {
            ...defaultPathMap,
            ...blogPostsPathMap
        }

    }
}