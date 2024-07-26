// types
import type { Metadata } from 'next';
// widgets
import VideoList from '@/widgets/VideoList/VideoList';

export const metadata: Metadata = {
    title: 'Youtube | Главная',
};

export default function Home() {
    return (
        <>
            <VideoList />
        </>
    );
}
