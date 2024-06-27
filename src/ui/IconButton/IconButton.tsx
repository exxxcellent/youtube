"use client"
// styles
import styles from "./styles.module.scss"

type Props = {
    children: React.ReactNode
    title?: string
    mode?: string
}

export default function IconButton({ children, title, mode = "dark" }: Props) {
    return <button className={mode === "dark" ? styles.btn_dark : styles.btn_light} title={title}>
        {children}
    </button>
}