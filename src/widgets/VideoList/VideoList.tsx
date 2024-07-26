'use client';
// components
import { ThumbnailVideo, VideoSnippet } from '@/entities/Video';
// api
import { useVideos } from './api/useVideos';

export default function VideoList() {
    const { data, isLoading, error } = useVideos({});

    return (
        <div className="py-16">
            {error ? <div>{error.message}</div> : null}
            {isLoading ? <div>Loading...</div> : null}
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-y-5 lg:mx-auto">
                {data?.data.items.map((video: VideoSnippet) => (
                    <ThumbnailVideo
                        {...video}
                        key={video.snippet.title}
                    />
                ))}
            </div>
        </div>
    );
}
