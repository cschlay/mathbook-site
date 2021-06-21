import * as React from "react"
import ReactMarkdown from "react-markdown"
import rehypeKatex from "rehype-katex"
import remarkMath from "remark-math4"

interface Props {
    children: string
    name?: string
}

export const Definition = ({ children, name }: Props) => {
    return (
        <div>
            <b>Definition{name && ` (${name})`}.</b>{" "}
            <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
            >
                {children}
            </ReactMarkdown>
        </div>
    )
}
