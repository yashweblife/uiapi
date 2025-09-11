import type { ReactNode } from "react"

export function ListHeader({ title }: { title?: string }) {
    return (
        <h1>{title}</h1>
    )
}
export function ListFooter({ children }: { children?: ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}

export function Item({ children }: { children?: ReactNode }) {
    return (
        <li
            style={{
                padding: '1em',
                textDecoration: 'none',
            }}
        >
            {children}
        </li>
    )
}
type ListProps = {
    children: ReactNode,
    variant?: 'default' | 'number' | 'bullet'
}
export default function List({ children, variant }: ListProps) {
    if (variant === 'bullet') {
        return (
            <ul
                style={{
                    border: '1px solid black',
                    padding: '1em',
                }}
            >
                {children}
            </ul>
        )
    }
    if (variant === 'number') {
        return (
            <ol
                style={{
                    border: '1px solid black',
                    padding: '1em',
                    listStyle: 'none',
                }}
            >
                {children}
            </ol>
        )
    }
    return (
        <ul
            style={{
                border: '1px solid black',
                padding: '1em',
                listStyle: 'none',
            }}
        >
            {children}
        </ul>
    )
}