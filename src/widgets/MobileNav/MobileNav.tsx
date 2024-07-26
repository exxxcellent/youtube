// icons
import {
    BiFilm,
    BiHappy,
    BiHome,
    BiSolidVideos,
    BiVideoPlus,
} from 'react-icons/bi';
// styles
import styles from './styles.module.scss';
// ui
import MobileNavButton from './ui/MobileNavButton/MobileNavButton';

export default function MobileNav() {
    return (
        <ul className={styles.list}>
            <MobileNavButton href="/">
                <BiHome />
                <span>Главная</span>
            </MobileNavButton>
            <MobileNavButton href="/shorts">
                <BiFilm />
                <span>Shorts</span>
            </MobileNavButton>
            <MobileNavButton href="/create">
                <BiVideoPlus />
                <span>Создать</span>
            </MobileNavButton>
            <MobileNavButton href="/subscriptions">
                <BiSolidVideos />
                <span>Подписки</span>
            </MobileNavButton>
            <MobileNavButton href="/account">
                <BiHappy />
                <span>Вы</span>
            </MobileNavButton>
        </ul>
    );
}
