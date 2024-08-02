'use client';
// components
import { VideoSnippet, ThumbnailSkeleton } from '@/entities/Video';
import SearchVideo from '@/entities/Video/ui/SearchVideo/SearchVideo';
// api
import { useVideosBySearch } from '../Search/api/useVideosBySearch';

interface VideoResultsProps {
    query: string;
}

export default function VideoResults({ query }: VideoResultsProps) {
    const { data, isLoading, error } = useVideosBySearch({ q: query });

    return (
        <div className="py-10 w-full">
            {error ? <div>{error.message}</div> : null}

            <div className="flex flex-col gap-5 mx-auto w-3/4">
                {isLoading
                    ? new Array(40)
                          .fill(0)
                          .map((_, i) => <ThumbnailSkeleton key={i} />)
                    : null}
                {data?.data.items.map((video: VideoSnippet) => (
                    <SearchVideo
                        {...video}
                        key={video.snippet.title}
                    />
                ))}
            </div>
        </div>
    );
}
