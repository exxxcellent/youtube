// types
import type { CategoryProps } from '../../model/Category.interface';
// styles
import styles from './styles.module.scss';
// store
import { useAppStore } from '@/app/store/store';

export default function Category({ snippet, id }: CategoryProps) {
    const { setCategoryId } = useAppStore();

    return (
        <div
            className={styles.category}
            key={snippet.title}>
            <input
                type="radio"
                name="tags"
                id={snippet.title}
            />
            <label
                htmlFor={snippet.title}
                onClick={() => setCategoryId(id)}>
                {snippet.title}
            </label>
        </div>
    );
}
