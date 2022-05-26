import withNextMdx from "@next/mdx"
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const withMdx = withNextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeHighlight, rehypeKatex],
    providerImportSource: "@mdx-js/react",
  },
})

export default withMdx({
  pageExtensions: ["tsx", 'mdx'],
})
