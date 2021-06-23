// eslint-disable-next-line no-undef
module.exports = {
    siteMetadata: {
        title: "mathbook-site",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        //"gatsby-plugin-sitemap",
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
                gatsbyRemarkPlugins: [
                    {
                        // https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: true,
                            noInlineHighlight: false,
                            languageExtensions: [],
                            prompt: {
                                user: "laych",
                                host: "dev",
                                global: true,
                            },
                            escapeEntities: {},
                        },
                    },
                ],
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
