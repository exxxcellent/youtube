// axios
import axios from 'axios';
// swr
import useSWR from 'swr';
// types
import type {
    useVideosBySearchReturn,
    useVideosBySearchParams,
} from '../models/useVideosBySearch.interface';
// contants
import { API_KEY, BASE_URL } from '@/constants';

export function useVideosBySearch<Data>({
    q = '',
    part = 'snippet, id',
    chart = 'mostPopular',
    maxResults = 40,
    regionCode = 'RU',
    relevanceLanguage = 'ru',
}: Partial<useVideosBySearchParams>): useVideosBySearchReturn<Data> {
    const fetcher = async (url: string) =>
        await axios.get<Data>(url, {
            params: {
                key: API_KEY,
                part,
                chart,
                maxResults,
                regionCode,
                relevanceLanguage,
                q,
            },
        });

    const { data, isLoading, error } = useSWR(`${BASE_URL}/search/`, fetcher);

    return { data, isLoading, error };
}
