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
        return {
            '/': { page: '/' },
            '/blogs': { page: '/blogs' },
            '/posts/[slug]': { page: '/posts/[slug]', query: { slug: 'sample' } },
            '/posts/[slug]': { page: '/posts/[slug]', query: { slug: 'post2' } },

        }
    }
}