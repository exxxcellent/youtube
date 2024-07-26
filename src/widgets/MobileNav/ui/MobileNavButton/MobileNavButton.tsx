// next
import Link from 'next/link';
// types
import type { MobileNavButtonProps } from '../../models/MobileNavButton.interface';
// styles
import styles from './styles.module.scss';

export default function MobileNavButton({
    children,
    href,
}: MobileNavButtonProps) {
    return (
        <Link
            href={href}
            className={styles.button}>
            {children}
        </Link>
    );
}
