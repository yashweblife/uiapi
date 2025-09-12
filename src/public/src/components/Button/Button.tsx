import { useState, type CSSProperties, type HTMLProps, type ReactNode } from "react"

type ButtonProps = {
    click: () => void,
    children?: ReactNode
    props?: HTMLProps<HTMLButtonElement>
    variant?: "default" | "primary" | "secondary"
    size?: "small" | "medium" | "large"
}

export default function Button({
    click,
    children,
    variant = "default",
    size = "medium",
    ...props
}: ButtonProps) {
    const [hover, setHover] = useState(false)
    const defaultStyle: CSSProperties = {
        transition: 'box-shadow 0.2s ease-in-out',
        border: 'none',
        boxShadow: hover ? '0 0 5px rgb(100,100,100)' : '0 0 5px rgb(200,200,200)',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '5px',
        color: 'white',
        backgroundColor: 'rgba(32, 32, 32, 1)',
        fontSize: size === "small" ? "12px" : size === "medium" ? "16px" : "20px"
    }
    const primaryVariantStyle = {
        ...defaultStyle,
        backgroundColor: "rgb(51, 226, 203)",
        color: "rgb(32,32,32)"
    }
    const secondaryVariantStyle = {
        ...defaultStyle,
        backgroundColor: "rgba(51, 141, 226, 1)",
        color: "black",
    }
    return (
        <button
            onClick={click}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            {...props}
            style={variant === "primary" ? primaryVariantStyle : variant === "secondary" ? secondaryVariantStyle : defaultStyle}
        >
            {children}

        </button>
    )
}