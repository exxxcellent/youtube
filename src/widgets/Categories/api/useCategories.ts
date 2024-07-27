// axios
import axios from 'axios';
// swr
import useSWR from 'swr';
// types
import type {
    useCategoriesParams,
    useCategoriesReturn,
} from '../models/useCategories.interface';
// contants
import { API_KEY, BASE_URL } from '@/constants';

export function useCategories<Data>({
    part = 'snippet',
    regionCode = 'RU',
}: Partial<useCategoriesParams>): useCategoriesReturn<Data> {
    const fetcher = async (url: string) =>
        await axios.get<Data>(url, {
            params: {
                key: API_KEY,
                part,
                regionCode,
            },
        });

    const { data, isLoading, error } = useSWR(
        `${BASE_URL}/videoCategories/`,
        fetcher,
    );

    return { data, isLoading, error };
}
