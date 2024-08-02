export interface useVideosBySearchParams {
    q: Required<string>;
    part: string;
    chart: 'chartUnspecified' | 'mostPopular';
    maxResults: number;
    regionCode: string;
    relevanceLanguage: string;
}

export interface useVideosBySearchReturn<Data> {
    data: Data | any | undefined;
    isLoading: boolean;
    error: Error | null;
}
