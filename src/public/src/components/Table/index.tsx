import type { ReactNode } from "react";

export function TableHeader({ headers }: { headers: string[] }) {
    return (
        <thead
            style={{
                borderBottom: '1px solid rgb(200,200,200)',
                backgroundColor: "rgb(32,32,32)",
                width: '100%'
            }}
        >
            <tr
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: '1px solid rgb(200,200,200)',
                    width: '100%'
                }}
            >
                {headers.map((header) => (
                    <th
                        key={header}
                        style={{
                            position: "sticky",
                            top: 0,
                            width: "100%",
                            padding: "1em 0.8em",
                            textAlign: "left",
                            border: "1px solid rgb(100,100,100)",
                            minWidth: "100px",
                            color: 'white'
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
                display: 'flex',
                alignItems: 'center',
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
                minWidth: '120px',
                border: "1px solid rgba(26, 26, 26, 0.3)",
                width:'100%',
                height: '100%'
            }}
            colSpan={1}
        >
            {children}
        </td>
    )
}
export function TableFooter({ children }: { children: ReactNode }) {
    return (
        <tfoot
            style={{
                backgroundColor: "rgb(32,32,32)",
                border: '1px solid rgb(200,200,200)',
                color: 'white'
            }}
        >
            {children}
        </tfoot>
    )
}
export default function Table({ children }: { children: ReactNode }) {
    return (
        <div
            style={{
                padding: "18px",
                borderRadius: "12px",
                overflowX: "auto",
            }}
        >
            <table
                style={{
                    border: "1px solid rgba(26, 26, 26, 0.3)",
                    borderCollapse: "separate",
                    borderSpacing: 0,
                    borderRadius: '0.5em',
                    overflow: "hidden",
                    tableLayout: "fixed",
                    color: "inherit",
                }}
            >
                {children}
            </table>
        </div>
    )
}