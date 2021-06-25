import * as React from "react"

export const LicenseAttribution = () => {
    return (
        <div style={{ backgroundColor: "lightgreen" }}>
            <small>
                This project uses open source and public domain math textbook
                materials. The included texts are from{" "}
                <a
                    href="https://openlogicproject.org/about/"
                    target="_blank"
                    rel="noreferrer"
                >
                    The Open Logic Project
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
        </div>
    )
}
