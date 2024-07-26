// next
import Link from 'next/link';
import Image from 'next/image';
// styles
import styles from './styles.module.scss';
// icons
import { BiBell, BiHappy, BiMenu, BiVideoPlus } from 'react-icons/bi';
// media
import logo from '@/assets/youtube.svg';
// components
import Search from '@/widgets/Search/Search';
// ui
import IconButton from '@/shared/ui/IconButton/IconButton';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <IconButton mode="light">
                    <BiMenu className="w-7 h-7" />
                </IconButton>
                <Link
                    href="/"
                    title="Главная страница Youtube">
                    <Image
                        width={100}
                        height={100}
                        src={logo.src}
                        alt="Youtube"
                    />
                </Link>
            </div>
            <Search />
            <div className="flex">
                <IconButton
                    title="Создать"
                    mode="light">
                    <BiVideoPlus />
                </IconButton>
                <IconButton
                    title="Уведомления"
                    mode="light">
                    <BiBell />
                </IconButton>
                <IconButton mode="light">
                    <BiHappy />
                </IconButton>
            </div>
        </header>
    );
}
