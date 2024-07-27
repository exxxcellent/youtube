// types
import type { Metadata } from 'next';
// widgets
import VideoList from '@/widgets/VideoList/VideoList';
import Categories from '@/widgets/Categories/Categories';

export const metadata: Metadata = {
    title: 'Youtube | Главная',
};

export default function Home() {
    return (
        <>
            <Categories />
            <VideoList />
        </>
    );
}
