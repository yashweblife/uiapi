import type { CSSProperties, ReactNode } from "react"

export function CardHeader({ children }: { children?: ReactNode }) {
    return (
        <div
            style={{
                padding: '1em',
                display: 'flex',
                alignItems: 'center',
                gap: '1em',
                borderBottom: '1px solid rgb(200,200,200)',
            }}
        >
            {children}
        </div>
    )
}
export function CardAction({ children }: { children?: ReactNode }) {
    return (
        <div
            style={{
                padding: '1em',
                display: 'flex',
                alignItems: 'center',
                gap: '1em',
            }}
        >
            {children}
        </div>
    )
}
export function CardBody({ children }: { children?: ReactNode }) {
    return (
        <div
            style={{
                padding: '1em',
            }}
        >
            {children}
        </div>
    )
}

export default function Card({ children }: { children?: ReactNode }) {
    const defaultStyle: CSSProperties = {
        borderRadius: '0.2em',
        boxShadow: '0 0 1em rgb(200,200,200)',
        padding: '0.5em',
        width:'clamp(300px, 100%, 600px)',
    }
    return (
        <div
            style={{
                ...defaultStyle,
            }}
        >
            {children}
        </div>
    )
}