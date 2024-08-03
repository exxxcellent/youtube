'use client';
// react
import { useRef, useState } from 'react';
// next
import Link from 'next/link';
// styles
import styles from './styles.module.scss';
// icons
import { BiSearch, BiSolidKeyboard, BiSolidMicrophone } from 'react-icons/bi';
// ui
import IconButton from '@/shared/ui/IconButton/IconButton';

export default function Search() {
    const [focus, setFocus] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);

    function handleFocus(state: boolean) {
        if (state === false) {
            setFocus(false);
            searchRef.current?.classList.remove('border-blue');
            searchRef.current?.classList.add('border-lightgray');
            return;
        }
        setFocus(true);
        searchRef.current?.classList.remove('border-lightgray');
        searchRef.current?.classList.add('border-blue');
    }

    return (
        <form className={styles.form}>
            <div
                ref={searchRef}
                className="flex items-center border overflow-hidden border-lightgray rounded-full">
                <div className={styles.field}>
                    {focus ? <BiSearch className="w-5 h-5 me-3" /> : ''}
                    <input
                        className={styles.input}
                        type="search"
                        placeholder="Введите запрос"
                        ref={inputRef}
                        onFocus={() => handleFocus(true)}
                        onBlur={() => handleFocus(false)}
                    />
                    <button>
                        <BiSolidKeyboard className={styles.icon} />
                    </button>
                </div>
                <Link
                    href={`/results/?query=${inputRef.current?.value}`}
                    title="Введите запрос"
                    className={styles.btn_search}>
                    <BiSearch className={styles.icon} />
                </Link>
            </div>
            <IconButton title="Голосовой поиск">
                <BiSolidMicrophone />
            </IconButton>
        </form>
    );
}
