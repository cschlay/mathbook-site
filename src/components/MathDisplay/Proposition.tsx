import * as React from "react"

interface Props {
    children: string
    name?: string
}

export const Proposition = ({ children, name }: Props) => {
    return (
        <div
            style={{
                border: "1px solid black",
                padding: "0.5rem 1rem",
            }}
        >
            <b>Proposition{name && ` (${name})`}.</b> {children}
        </div>
    )
}
