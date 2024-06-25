"use client"
import { useRef, useState } from "react";
import { BiSearch, BiSolidKeyboard, BiSolidMicrophone } from "react-icons/bi";

export default function Search() {
    const [focus, setFocus] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    function handleFocus(state: boolean) {
        if (state === false) {
            setFocus(false)
            inputRef.current?.classList.remove("border-blue")
            inputRef.current?.classList.add("border-lightgray")
        } else {
            setFocus(true)
            inputRef.current?.classList.remove("border-lightgray")
            inputRef.current?.classList.add("border-blue")
        }
    }

    return <form
        className="flex gap-3">
        <div
            ref={inputRef}
            className="flex items-center border border-1 overflow-hidden border-lightgray rounded-full">
            <div
                className="flex items-center px-4">
                {focus ?
                    <BiSearch
                        className="w-5 h-5 me-3" /> : ""}
                <input
                    className="bg-black text-white py-2 outline-none w-1/3 md:w-72 xl:w-96"
                    type="search"
                    placeholder="Введите запрос"
                    onFocus={() => handleFocus(true)}
                    onBlur={() => handleFocus(false)}
                />
                <button>
                    <BiSolidKeyboard
                        className="w-5 h-5" />
                </button>
            </div>
            <button
                title="Введите запрос"
                className="w-100 px-5 flex justify-center items-center h-10 bg-darkgray hover:bg-lightgray duration-100">
                <BiSearch
                    className="w-5 h-5" />
            </button>
        </div>
        <button
            title="Голосовой поиск"
            className="flex items-center justify-center w-10 h-10 bg-darkgray rounded-full p-1 hover:bg-lightgray duration-100">
            <BiSolidMicrophone
                className="w-5 h-5" />
        </button>
    </form >
}