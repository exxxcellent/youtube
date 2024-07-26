//styles
import styles from './styles.module.scss';

export default function ThumbnailSkeleton() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.image}></div>
            <div className={styles.info}>
                <div className={styles.channel}>
                    <div className={styles.avatar}></div>
                </div>
                <div className={styles.description}>
                    <div className={styles.title}></div>
                    <div className={styles.views}></div>
                </div>
            </div>
        </div>
    );
}
