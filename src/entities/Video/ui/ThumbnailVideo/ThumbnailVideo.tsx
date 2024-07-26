// next
import Link from 'next/link';
// types
import type { VideoSnippet } from '../../model/ThumbnailVideo.interface';
// styles
import styles from './styles.module.scss';
// icons
import { BiDotsVerticalRounded, BiHistory, BiShow } from 'react-icons/bi';
// helpers
import { formatViews } from '../../helpers/formatViews';
import { formatDate } from '../../helpers/formatDate';
// ui
import IconButton from '@/shared/ui/IconButton/IconButton';

export default function ThumbnailVideo({
    snippet,
    contentDetails,
    statistics,
    id,
}: VideoSnippet) {
    return (
        <Link
            href={{
                pathname: '/watch',
                query: { v: id },
            }}
            className={styles.wrapper}>
            <div
                className={styles.video}
                style={{
                    backgroundImage: `url('${snippet.thumbnails.medium.url}')`,
                }}>
                <div className={styles.duration}>20:04</div>
            </div>
            <div className={styles.info}>
                <div
                    className={styles.avatar}
                    style={{
                        backgroundImage:
                            "url('https://yt3.ggpht.com/ytc/AIdro_leEV8XBVmECt6ExU730FDKK6sooMuSX2c9bZPHWy3VrNg=s68-c-k-c0x00ffffff-no-rj')",
                    }}></div>
                <div className={styles.description}>
                    <h4 className={styles.title}>{snippet.title}</h4>
                    <div className={styles.description_additional}>
                        <div className={styles.channel}>
                            {snippet.channelTitle}
                        </div>
                        <div className={styles.views}>
                            <span>
                                <BiShow />
                                {formatViews(statistics.viewCount)}
                            </span>
                            <span>
                                <BiHistory />
                                {formatDate(contentDetails.dimension)}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.button}>
                    <IconButton mode="light">
                        <BiDotsVerticalRounded />
                    </IconButton>
                </div>
            </div>
        </Link>
    );
}
