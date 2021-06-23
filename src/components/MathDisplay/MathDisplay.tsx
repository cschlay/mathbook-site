import * as React from "react"
import * as katex from "katex"

interface Props {
    block?: boolean
    math: string
}

/**
 * The custom math renderer since the plugins doesn't work with Gatsby mdx.
 * Also some content comes from backend so it need to be rendered.
 *
 * Warning: Doesn't sanitize against XSS, so do not render user inputs
 */
export const MathDisplay = ({ block = false, math }: Props) => {
    const renderedContent = React.useMemo(
        () => katex.renderToString(math),
        [math]
    )

    if (block) {
        return (
            <div className="math math-display">
                <div
                    className="katex-display"
                    dangerouslySetInnerHTML={{ __html: renderedContent }}
                />
            </div>
        )
    }

    return <span dangerouslySetInnerHTML={{ __html: renderedContent }} />
}
