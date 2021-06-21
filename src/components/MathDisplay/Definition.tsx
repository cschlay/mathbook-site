import * as React from "react"

interface Props {
    children: React.ReactChildren
    name?: string
}

export const Definition = ({ children, name }: Props) => {
    return (
        <div>
            <b>Definition{name && ` (${name})`}.</b> {children}
        </div>
    )
}
