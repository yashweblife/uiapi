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
type CardProps = {
    children?: ReactNode,
    elevation: 0 | 1 | 2 | 3 | 4 | 5 | undefined
}
export default function Card({ children, elevation = 0 }: CardProps) {
    if (elevation > 5) elevation = 5
    if (elevation < 0) elevation = 0
    const defaultStyle: CSSProperties = {
        borderRadius: '0.2em',
        padding: '0.5em',
        width: 'clamp(300px, 100%, 600px)',
    }
    const elevationStyles: CSSProperties[] = [
        {
            border: '1px solid rgb(200,200,200)'
        },
        {
            boxShadow: `0 0 0.1em rgb(200,200,200)`
        },
        {
            boxShadow: `0 0 0.5em rgb(200,200,200)`
        },
        {
            boxShadow: `0 0 1em rgb(200,200,200)`
        },
        {
            boxShadow: `0 0 1.5em rgb(200,200,200)`
        },
        {
            boxShadow: `0 0 2em rgb(200,200,200)`
        },

    ]
    return (
        <div
            style={{
                ...defaultStyle,
                ...elevationStyles[elevation],
            }}
        >
            {children}
        </div>
    )
}