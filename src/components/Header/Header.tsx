// next
import Link from "next/link"
// styles
import styles from "./styles.module.scss"
// icons
import { BiBell, BiHappy, BiMenu, BiVideoPlus } from "react-icons/bi"
// media
import logo from "../../assets/youtube.svg"
// components
import Search from "../Search/Search"
import IconButton from "@/ui/IconButton/IconButton"

export default function Header() {
    return <header className={styles.header}>
        <div className={styles.logo}>
            <IconButton mode="light">
                <BiMenu className="w-7 h-7" />
            </IconButton>
            <Link href="/" title="Главная страница Youtube">
                <img width={100} src={logo.src} alt="" />
            </Link>
        </div>
        <Search />
        <div className="flex">
            <IconButton title="Создать" mode="light">
                <BiVideoPlus className={styles.icon} />
            </IconButton>
            <IconButton title="Уведомления" mode="light">
                <BiBell className={styles.icon} />
            </IconButton>
            <IconButton title="Аккаунт" mode="light">
                <BiHappy className={styles.icon} />
            </IconButton>
        </div>
    </header>
}