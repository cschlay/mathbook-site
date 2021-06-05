import * as React from "react"
import * as katex from "katex"

interface Props {
    block?: boolean
    content: string
}

/**
 * The custom math renderer since the plugins doesn't work with Gatsby mdx.
 * Also some content comes from backend so it need to be rendered.
 *
 * Warning: Doesn't sanitize against XSS, so do not render user inputs
 */
export const MathDisplay = ({ block = false, content }: Props) => {
    const renderedContent = React.useMemo(
        () => katex.renderToString(content),
        [content]
    )

    if (block) {
        return <div dangerouslySetInnerHTML={{ __html: renderedContent }} />
    }

    return <span dangerouslySetInnerHTML={{ __html: renderedContent }} />
}
