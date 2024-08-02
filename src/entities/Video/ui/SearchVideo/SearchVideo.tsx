// next
import Link from 'next/link';
// types
import type { VideoSnippet } from '../../model/ThumbnailVideo.interface';
// styles
import styles from './styles.module.scss';
// icons
import { BiDotsVerticalRounded } from 'react-icons/bi';
// ui
import IconButton from '@/shared/ui/IconButton/IconButton';

export default function SearchVideo({ snippet, id }: VideoSnippet) {
    return (
        <div className={styles.wrapper}>
            <Link
                href={{
                    pathname: '/watch',
                    query: { v: id.videoId },
                }}
                className={styles.video}
                style={{
                    backgroundImage: `url('${snippet.thumbnails.medium.url}')`,
                }}>
                <div className={styles.duration}>20:04</div>
            </Link>
            <div className={styles.info}>
                <div className={styles.header}>
                    <Link
                        href={{
                            pathname: '/watch',
                            query: { v: id.videoId },
                        }}>
                        <h4 className={styles.title}>{snippet.title}</h4>
                    </Link>
                    <IconButton mode="light">
                        <BiDotsVerticalRounded />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}
