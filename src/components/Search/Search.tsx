"use client"
// react
import { useRef, useState } from "react";
// styles
import styles from "./styles.module.scss"
// icons
import { BiSearch, BiSolidKeyboard, BiSolidMicrophone } from "react-icons/bi";
// components
import IconButton from "@/ui/IconButton/IconButton";

export default function Search() {
    const [focus, setFocus] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    function handleFocus(state: boolean) {
        if (state === false) {
            setFocus(false)
            inputRef.current?.classList.remove("border-blue")
            inputRef.current?.classList.add("border-lightgray")
            return
        }
        setFocus(true)
        inputRef.current?.classList.remove("border-lightgray")
        inputRef.current?.classList.add("border-blue")
    }

    return <form className={styles.form}>
        <div ref={inputRef} className={styles.search}>
            <div className={styles.field}>
                {focus ? <BiSearch className="w-5 h-5 me-3" /> : ""}
                <input className={styles.input}
                    type="search"
                    placeholder="Введите запрос"
                    onFocus={() => handleFocus(true)}
                    onBlur={() => handleFocus(false)}
                />
                <button>
                    <BiSolidKeyboard className={styles.icon} />
                </button>
            </div>
            <button
                title="Введите запрос"
                className={styles.btn_search}>
                <BiSearch className={styles.icon} />
            </button>
        </div>
        <IconButton title="Голосовой поиск">
            <BiSolidMicrophone className={styles.icon} />
        </IconButton>
    </form >
}