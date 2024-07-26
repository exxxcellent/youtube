'use client';
// react
import { useRef, useState } from 'react';
// styles
import styles from './styles.module.scss';
// icons
import { BiSearch, BiSolidKeyboard, BiSolidMicrophone } from 'react-icons/bi';
// ui
import IconButton from '@/shared/ui/IconButton/IconButton';

export default function Search() {
    const [focus, setFocus] = useState(false);
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
                        onFocus={() => handleFocus(true)}
                        onBlur={() => handleFocus(false)}
                        onChange={(e) => e.preventDefault()}
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
                <BiSolidMicrophone />
            </IconButton>
        </form>
    );
}
