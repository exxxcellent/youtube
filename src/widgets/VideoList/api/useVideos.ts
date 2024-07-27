// axios
import axios from 'axios';
// swr
import useSWR from 'swr';
// types
import type {
    useVideosParams,
    useVideosReturn,
} from '../models/useVideos.interface';
// contants
import { API_KEY, BASE_URL } from '@/constants';

export function useVideos<Data>({
    part = 'snippet, contentDetails, statistics, id',
    chart = 'mostPopular',
    maxResults = 40,
    regionCode = 'RU',
    videoCategoryId = '',
}: Partial<useVideosParams>): useVideosReturn<Data> {
    const fetcher = async (url: string) =>
        await axios.get<Data>(url, {
            params: {
                key: API_KEY,
                part,
                chart,
                maxResults,
                regionCode,
            },
        });

    const { data, isLoading, error } = useSWR(
        `${BASE_URL}/videos/?videoCategoryId=${videoCategoryId}`,
        fetcher,
    );

    return { data, isLoading, error };
}
