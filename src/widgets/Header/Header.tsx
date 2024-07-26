// next
import Link from 'next/link';
import Image from 'next/image';
// styles
import styles from './styles.module.scss';
// icons
import { BiBell, BiHappy, BiMenu, BiSearch, BiVideoPlus } from 'react-icons/bi';
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
                <div className="hidden lg:block">
                    <IconButton mode="light">
                        <BiMenu />
                    </IconButton>
                </div>
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
                <div className="hidden lg:block">
                    <IconButton
                        title="Создать"
                        mode="light">
                        <BiVideoPlus />
                    </IconButton>
                </div>
                <div className="block md:hidden">
                    <IconButton
                        title="Поиск"
                        mode="light">
                        <BiSearch />
                    </IconButton>
                </div>
                <IconButton
                    title="Уведомления"
                    mode="light">
                    <BiBell />
                </IconButton>
                <div className="hidden lg:block">
                    <IconButton mode="light">
                        <BiHappy />
                    </IconButton>
                </div>
            </div>
        </header>
    );
}
