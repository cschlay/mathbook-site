import * as React from "react"
import { Definition } from "./MathDisplay/Definition"
import { Example } from "./MathDisplay/Example"
import { MDXProvider } from "@mdx-js/react"
import { MathDisplay } from "./MathDisplay/MathDisplay"

interface Props {
    children: React.ReactChildren
}

const MdxLayout = ({ children }: Props) => (
    <MDXProvider components={{ Definition, Example, Tex: MathDisplay }}>
        <small>
            This project uses open source and public domain math textbook
            materials. The included texts are{" "}
            <a
                href="https://openlogicproject.org/about/"
                target="_blank"
                rel="noreferrer"
            >
                Open Logic Project
            </a>{" "}
            (CC BY 4.0 License). The material is modified, combined with other
            texts, and extended to fit computer science approach to mathematics.
            Explicit references can be found in the{" "}
            <a
                href="https://github.com/cschlay/mathbook-site/tree/main/src/pages/book/chapters"
                target="_blank"
                rel="noreferrer"
            >
                source code
            </a>
            .
        </small>
        {children}
    </MDXProvider>
)

export default MdxLayout
