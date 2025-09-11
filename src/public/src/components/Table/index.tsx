import type { ReactNode } from "react";

export function TableHeader({ headers }: { headers: string[] }) {
    return (
        <thead
            style={{
                borderBottom: '1px solid rgb(200,200,200)',
            }}
        >
            <tr
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1em',
                    borderBottom: '1px solid rgb(200,200,200)',
                }}
            >
                {headers.map((header) => (
                    <th
                        key={header}
                        style={{
                            position: "sticky",
                            top: 0,
                            padding: "14px 12px",
                            textAlign: "left" as const,
                            letterSpacing: "0.02em",
                            color: "#13191bff",
                            borderBottom: "1px solid rgba(255,255,255,0.04)",
                        }}
                    >{header}</th>
                ))}
            </tr>
        </thead>
    )
}
export function TableRow({ children }: { children: ReactNode }) {
    return (
        <tr
            style={{
                padding: '0.5em',
                display: 'flex',
                alignItems: 'center',
                gap: '1em',
                borderBottom: '1px solid rgb(200,200,200)',
            }}
        >
            {children}
        </tr>
    )
}
export function TableColumn({ children }: { children: ReactNode }) {
    return (
        <td
            style={{
                padding: "0.5em",
                verticalAlign: "middle",
                borderBottom: "1px dashed rgba(255,255,255,0.02)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
            }}
        >
            {children}
        </td>
    )
}
export default function Table({ children }: { children: ReactNode }) {
    return (
        <div
            style={{
                background:
                    "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                padding: "18px",
                borderRadius: "12px",
                overflowX: "auto",
                border: "1px solid rgba(26, 26, 26, 0.3)",
            }}
        >
            <table
                style={{
                    borderCollapse: "separate",
                    borderSpacing: 0,
                    width: "100%",
                    tableLayout: "fixed",
                    background: "linear-gradient(180deg, rgba(255,255,255,0.015), transparent)",
                    color: "inherit",
                }}
            >
                {children}
            </table>
        </div>
    )
}