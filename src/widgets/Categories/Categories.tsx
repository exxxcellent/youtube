'use client';
// styles
import styles from './styles.module.scss';
// entities&types
import { Category, CategoryProps } from '@/entities/Category';
// api
import { useCategories } from './api/useCategories';

export default function Categories() {
    const { data } = useCategories<CategoryProps[]>({});

    return (
        <form className={styles.categories}>
            {data?.data.items.map((category: CategoryProps) => (
                <Category
                    key={category.snippet.title}
                    snippet={category.snippet}
                />
            ))}
        </form>
    );
}
