import React from "react"

interface Props {
    children: React.ReactNode
    id: string
}

export const Problem = ({ children, id }: Props): JSX.Element => {
    return (
        <div style={{ padding: "0.5rem 1rem", border: "1px solid black" }}>
            <b>Problem.</b> {children}
        </div>
    )
}
