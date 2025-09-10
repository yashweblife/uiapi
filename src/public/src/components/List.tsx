import type { ReactNode } from "react"

export default function List({ children }: { children: ReactNode }) {
    return (
        <ul>
            {children}
        </ul>
    )
}