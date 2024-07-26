'use client';
// react
import { useState } from 'react';
// styles
import styles from './styles.module.scss';

type Props = {
    children: React.ReactNode;
    title?: string;
    mode?: string;
};

export default function IconButton({
    children,
    title = '',
    mode = 'dark',
}: Props) {
    const [hover, setHover] = useState(false);

    return (
        <div className={styles.wrapper}>
            <button
                className={mode === 'dark' ? styles.btn_dark : styles.btn_light}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}>
                {children}
            </button>
            {title !== '' && hover == true ? (
                <div className={styles.title}>{title}</div>
            ) : (
                ''
            )}
        </div>
    );
}
