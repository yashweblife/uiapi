import type { ReactNode } from "react"

export function ListHeader({ title }: { title: string }) {
    return (
        <h1>{title}</h1>
    )
}
export function ListFooter({ children }: { children: ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}

export function Item({ children }: { children: ReactNode }) {
    return (
        <li>
            {children}
        </li>
    )
}

export default function List({ children }: { children: ReactNode }) {
    return (
        <>
            <ListHeader title="List Header" />
            <ul>
                {children}
            </ul>
        </>
    )
}