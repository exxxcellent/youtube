'use client';
// styles
import styles from './styles.module.scss';
// entities&types
import { Category, CategoryProps, CategorySkeleton } from '@/entities/Category';
// api
import { useCategories } from './api/useCategories';

export default function Categories() {
    const { data, isLoading, error } = useCategories<CategoryProps[]>({});

    return (
        <form className={styles.categories}>
            {error ? <div>{error.message}</div> : null}
            {isLoading
                ? new Array(10)
                      .fill(0)
                      .map((_, i) => <CategorySkeleton key={i} />)
                : null}
            {data?.data.items.map((category: CategoryProps) => (
                <Category
                    key={category.snippet.title}
                    snippet={category.snippet}
                />
            ))}
        </form>
    );
}
