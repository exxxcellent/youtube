export interface VideoSnippet {
    id: string;
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
