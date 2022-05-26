import withNextMdx from "@next/mdx"
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math";

const withMdx = withNextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeHighlight, rehypeKatex],
    providerImportSource: "@mdx-js/react",
  },
})

export default withMdx({
  pageExtensions: ["tsx", 'mdx'],
})
