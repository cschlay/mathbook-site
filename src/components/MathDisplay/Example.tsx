import * as React from "react"

interface Props {
    children: string
    name?: string
}

export const Example = ({ children, name }: Props) => {
    return (
        <div
            style={{
                border: "1px solid black",
                padding: "0.5rem 1rem",
            }}
        >
            <b>Example{name && ` (${name})`}.</b> {children}
        </div>
    )
}
