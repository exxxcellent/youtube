export interface VideoSnippet {
    id: {
        videoId: string;
        playlistId: string;
    };
    snippet: {
        title: string;
        thumbnails: {
            medium: {
                url: string;
            };
        };
        channelTitle: string;
        channelId: string;
    };
    contentDetails: {
        duration: string;
        dimension: string;
    };
    statistics: {
        viewCount: number;
    };
}
