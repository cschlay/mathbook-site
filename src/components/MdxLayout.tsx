import * as React from "react"
import { Definition } from "./MathDisplay/Definition"
import { MDXProvider } from "@mdx-js/react"

interface Props {
    children: React.ReactChildren
}

const MdxLayout = ({ children }: Props) => (
    <MDXProvider components={{ Definition }}>{children}</MDXProvider>
)

export default MdxLayout
