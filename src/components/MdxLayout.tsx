import * as React from "react"
import { Definition } from "./MathDisplay/Definition"
import { Example } from "./MathDisplay/Example"
import { Helmet } from "react-helmet"
import { MDXProvider } from "@mdx-js/react"
import { MathDisplay } from "./MathDisplay/MathDisplay"
import { Proposition } from "./MathDisplay/Proposition"

interface Props {
    children: React.ReactChildren
}

const MdxLayout = ({ children, pageContext }: Props) => {
    return (
        <MDXProvider
            components={{ Definition, Example, Proposition, Tex: MathDisplay }}
        >
            <Helmet title={pageContext.frontmatter.title} defer={false} />

            <small>
                This project uses open source and public domain math textbook
                materials. The included texts are from{" "}
                <a
                    href="https://openlogicproject.org/about/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Open Logic Project
                </a>{" "}
                (CC BY 4.0 License). The material is modified, combined with
                other texts, and extended to fit computer science approach to
                mathematics. Explicit references can be found in the{" "}
                <a
                    href="https://github.com/cschlay/mathbook-site/tree/main/src/pages/book/chapters"
                    target="_blank"
                    rel="noreferrer"
                >
                    source code
                </a>
                .
            </small>
            <h1>{pageContext.frontmatter.title}</h1>
            {children}
        </MDXProvider>
    )
}

export default MdxLayout
