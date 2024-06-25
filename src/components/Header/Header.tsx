import { BiBell, BiHappy, BiMenu, BiVideoPlus } from "react-icons/bi";
import logo from "../../assets/youtube.svg"
import Search from "../Search/Search";
import Link from "next/link";

export default function Header() {
    return <header className="flex justify-between items-center px-5 py-3">
        <div className="flex gap-5 items-center">
            <button
                className="flex items-center justify-center w-10 h-10 bg-black rounded-full p-1 hover:bg-lightgray duration-100"><BiMenu className="w-7 h-7" /></button>
            <Link href="/" title="Главная страница Youtube">
                <img width={100} src={logo.src} alt="" />
            </Link>
        </div>
        <div>
            <Search />
        </div>
        <div className="flex">
            <button
                title="Создать"
                className="flex items-center justify-center w-10 h-10 bg-black rounded-full p-1 hover:bg-darkgray duration-100">
                <BiVideoPlus className="w-5 h-5" />
            </button>
            <button
                title="Уведомления"
                className="flex items-center justify-center w-10 h-10 bg-black rounded-full p-1 hover:bg-darkgray duration-100">
                <BiBell className="w-5 h-5" />
            </button>
            <button
                className="flex items-center justify-center w-10 h-10 bg-black rounded-full p-1 hover:bg-darkgray duration-100">
                <BiHappy className="w-5 h-5" />
            </button>
        </div>
    </header>
}