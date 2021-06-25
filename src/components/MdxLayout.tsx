import * as React from "react"
import { Definition } from "./MathDisplay/Definition"
import { Example } from "./MathDisplay/Example"
import { Helmet } from "react-helmet"
import { LicenseAttribution } from "./LicenseAttribution"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MathDisplay } from "./MathDisplay/MathDisplay"
import { PageContext } from "gatsby/dist/gatsby/src/query/types"
import { Problem } from "./MathDisplay/Problem"
import { Proposition } from "./MathDisplay/Proposition"

interface Props {
    children: React.ReactChildren
    pageContext: PageContext
}

const MdxLayout = ({ children, pageContext }: Props): JSX.Element => {
    return (
        <MDXProvider
            components={{
                Definition,
                Example,
                Problem,
                Proposition,
                Tex: MathDisplay,
            }}
        >
            <Helmet title={pageContext.frontmatter.title} defer={false} />
            <main>
                <LicenseAttribution />
                <h1>{pageContext.frontmatter.title}</h1>
                {children}
            </main>

            <footer>
                <Link to="/">Table of Contents</Link>
            </footer>
        </MDXProvider>
    )
}

export default MdxLayout
