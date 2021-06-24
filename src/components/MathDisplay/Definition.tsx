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
        <div
            style={{
                border: "1px solid black",
                padding: "0.5rem 1rem",
            }}
        >
            <b>Definition{name && ` (${name})`}.</b> {children}
        </div>
    )
}
