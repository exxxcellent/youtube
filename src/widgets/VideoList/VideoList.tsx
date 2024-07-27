'use client';
// components
import {
    ThumbnailVideo,
    VideoSnippet,
    ThumbnailSkeleton,
} from '@/entities/Video';
// api
import { useVideos } from './api/useVideos';

export default function VideoList() {
    const { data, isLoading, error } = useVideos({});

    return (
        <div className="py-16 xl:py-20 w-full">
            {error ? <div>{error.message}</div> : null}

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-y-5 lg:mx-auto">
                {isLoading
                    ? new Array(40)
                          .fill(0)
                          .map((_, i) => <ThumbnailSkeleton key={i} />)
                    : null}
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
