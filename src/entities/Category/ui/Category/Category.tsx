// types
import type { CategoryProps } from '../../model/Category.interface';
// styles
import styles from './styles.module.scss';

export default function Category({ snippet }: CategoryProps) {
    return (
        <div
            className={styles.category}
            key={snippet.title}>
            <input
                type="radio"
                name="tags"
                id={snippet.title}
            />
            <label htmlFor={snippet.title}>{snippet.title}</label>
        </div>
    );
}
