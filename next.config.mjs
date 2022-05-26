import withNextMdx from "@next/mdx"
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const withMdx = withNextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    providerImportSource: "@mdx-js/react",
  },
})

export default withMdx({
  pageExtensions: ["tsx", 'mdx'],
})
