import type { HTMLProps, ReactNode } from "react"

type ButtonProps = {
    click: () => void,
    children: ReactNode
    props?: HTMLProps<HTMLButtonElement>
}
export default function Button({
    click,
    children,
    ...props
}: ButtonProps) {
    return (
        <button onClick={click} {...props}>
            {children}
        </button>
    )
}