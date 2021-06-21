// eslint-disable-next-line no-undef
module.exports = {
    siteMetadata: {
        title: "mathbook-site",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                defaultLayouts: {
                    // eslint-disable-next-line no-undef
                    default: require.resolve("./src/components/MdxLayout.tsx"),
                },
                // eslint-disable-next-line no-undef
                remarkPlugins: [require("remark-math")],
                // eslint-disable-next-line no-undef
                rehypePlugins: [require("rehype-katex")],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "maths",
                path: "./src/components/",
            },
        },
    ],
}
