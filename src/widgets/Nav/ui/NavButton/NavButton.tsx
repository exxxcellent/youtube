'use client';
// next
import Link from 'next/link';
// types
import type { NavButtonProps } from './NavButton.interface';
// styles
import styles from './styles.module.scss';

export default function NavButton({
    children,
    title,
    href,
    out = false,
    target,
}: NavButtonProps) {
    return (
        <>
            {out === false ? (
                <Link
                    href={href}
                    title={title}
                    className={styles.button}>
                    {children}
                    <span className={styles.title}>{title}</span>
                </Link>
            ) : (
                <a
                    href={href}
                    title={title}
                    className={styles.button}
                    target={target}>
                    {children}
                    <span className={styles.title}>{title}</span>
                </a>
            )}
        </>
    );
}
