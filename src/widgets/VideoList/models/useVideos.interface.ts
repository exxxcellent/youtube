export interface useVideosParams {
    part: string;
    chart: 'chartUnspecified' | 'mostPopular';
    maxResults: number;
    regionCode: string;
    videoCategoryId: string | null;
}

export interface useVideosReturn<Data> {
    data: Data | any | undefined;
    isLoading: boolean;
    error: Error | null;
}
