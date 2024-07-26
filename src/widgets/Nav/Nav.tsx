'use client';
// next
import Image from 'next/image';
// icons
import {
    BiBall,
    BiBroadcast,
    BiChart,
    BiCog,
    BiCut,
    BiFilm,
    BiFlag,
    BiGame,
    BiHistory,
    BiHomeAlt,
    BiLike,
    BiListUl,
    BiMessageError,
    BiMusic,
    BiQuestionMark,
    BiRightArrowAlt,
    BiSolidVideos,
    BiStore,
    BiTime,
    BiTv,
    BiVideoRecording,
} from 'react-icons/bi';
// media
import studio from '@/assets/studio.svg';
import music from '@/assets/music.svg';
import kids from '@/assets/kids.svg';
// styles
import styles from './styles.module.scss';
// ui
import NavButton from './ui/NavButton/NavButton';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.list}>
                <NavButton
                    title="Главная"
                    href="/">
                    <BiHomeAlt className="w-5 h-5" />
                </NavButton>
                <NavButton
                    title="Shorts"
                    href="/shorts">
                    <BiFilm className="w-5 h-5" />
                </NavButton>
                <NavButton
                    title="Подписки"
                    href="/subscriptions">
                    <BiSolidVideos className="w-5 h-5" />
                </NavButton>
            </div>
            <div className={styles.list}>
                <NavButton
                    title="Вы"
                    href="/feed/you">
                    <BiRightArrowAlt className="w-5 h-5" />
                </NavButton>
                <NavButton
                    title="Мой канал"
                    href="/channel">
                    <BiTv className="w-5 h-5" />
                </NavButton>
                <NavButton
                    title="История"
                    href="/feed/history">
                    <BiHistory className="w-5 h-5" />
                </NavButton>
                <NavButton
                    title="Плейлисты"
                    href="/feed/playlists">
                    <BiListUl className="w-5 h-5" />
                </NavButton>
                <NavButton
                    title="Ваши видео"
                    href="https://studio.youtube.com/channel/videos"
                    target="_blank"
                    out>
                    <BiVideoRecording className="w-5 h-5" />
                </NavButton>
                <NavButton
                    title="Смотреть позже"
                    href="/playlist?list=WL">
                    <BiTime className="w-5 h-5" />
                </NavButton>
                <NavButton
                    title="Понравившиеся"
                    href="/playlist?list=LL">
                    <BiLike className="w-5 h-5" />
                </NavButton>
                <NavButton
                    title="Ваши клипы"
                    href="/feed/clips">
                    <BiCut className="w-5 h-5" />
                </NavButton>
            </div>
            <div className={styles.list}>
                <h3 className={styles.title}>Навигатор</h3>
                <NavButton
                    title="В тренде"
                    href="/feed/trending">
                    <BiChart className="w-5 h-5" />
                </NavButton>
                <NavButton
                    title="Музыка"
                    href="/feed/music">
                    <BiMusic className="w-5 h-5" />
                </NavButton>
                <NavButton
                    title="Фильмы"
                    href="/feed/films">
                    <BiStore className="w-5 h-5" />
                </NavButton>
                <NavButton
                    title="Трансляции"
                    href="/feed/broadcasts">
                    <BiBroadcast className="w-5 h-5" />
                </NavButton>
                <NavButton
                    title="Видеоигры"
                    href="/feed/gaming">
                    <BiGame className="w-5 h-5" />
                </NavButton>
                <NavButton
                    title="Спорт"
                    href="/feed/sport">
                    <BiBall className="w-5 h-5" />
                </NavButton>
            </div>
            <div className={styles.list}>
                <h3 className={styles.title}>Другие возможности</h3>
                <NavButton
                    title="Творческая студия"
                    href="https://studio.youtube.com/"
                    target="_blank"
                    out>
                    <Image
                        width={100}
                        height={100}
                        src={studio.src}
                        className="w-5 h-5"
                        alt=""
                    />
                </NavButton>
                <NavButton
                    title="YouTube Music"
                    href="https://music.youtube.com/"
                    target="_blank"
                    out>
                    <Image
                        width={100}
                        height={100}
                        src={music.src}
                        className="w-5 h-5"
                        alt=""
                    />
                </NavButton>
                <NavButton
                    title="YouTube Детям"
                    href="https://www.youtubekids.com/"
                    target="_blank"
                    out>
                    <Image
                        width={100}
                        height={100}
                        src={kids.src}
                        className="w-5 h-5"
                        alt=""
                    />
                </NavButton>
            </div>
            <div className={styles.list}>
                <NavButton
                    title="Настройки"
                    href="/account">
                    <BiCog className="w-5 h-5" />
                </NavButton>
                <NavButton
                    title="Жалобы"
                    href="/reporthistory">
                    <BiFlag className="w-5 h-5" />
                </NavButton>
                <NavButton
                    title="Справка"
                    href="https://support.google.com/youtube/community"
                    target="_blank"
                    out>
                    <BiQuestionMark className="w-5 h-5" />
                </NavButton>
                <NavButton
                    title="Отправить отзыв"
                    href="/feedback">
                    <BiMessageError className="w-5 h-5" />
                </NavButton>
            </div>
        </nav>
    );
}
