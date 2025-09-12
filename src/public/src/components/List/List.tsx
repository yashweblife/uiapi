import type { CSSProperties, ReactNode } from "react"
export function ListHeader({ title }: { title?: string }) {
    return (
        <header
            style={{
                padding: '1em',
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid rgb(200,200,200)',
            }}
        >
            <h2>{title}</h2>
        </header>
    )
}
export function ListFooter({ children }: { children?: ReactNode }) {
    return (
        <div
            style={{
                padding: '1em',
                display: 'flex',
                alignItems: 'center',
                marginTop: '1em',
            }}
        >
            {children}
        </div>
    )
}

export function Item({ children }: { children?: ReactNode }) {
    return (
        <li
            style={{
                padding: '1em',
                borderBottom: '1px solid rgb(200,200,200)',
                marginLeft: '1em',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '1em',
                    gap: '1em',
                }}
            >
                {children}
            </div>
        </li>
    )
}
type ListProps = {
    children: ReactNode,
    variant?: 'default' | 'number' | 'bullet'
}
const defaultStyle: CSSProperties = {
    boxShadow: '0 0 5px rgb(200,200,200)',
    padding: '1em',
    borderRadius: '1em',
}
const listStyle = {
    default: 'none',
    bullet: 'disc',
    number: 'decimal'
}
export default function List({ children, variant = 'default' }: ListProps) {
    return (
        <ul
            style={{
                ...defaultStyle,
                listStyle: listStyle[variant],
            }}
        >
            {children}
        </ul>
    )

}