export interface useCategoriesParams {
    part: string;
    regionCode: string;
}

export interface useCategoriesReturn<Data> {
    data: Data | any | undefined;
    isLoading: boolean;
    error: Error | null;
}
