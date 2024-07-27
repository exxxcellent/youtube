// zustand
import { create } from 'zustand';

interface AppState {
    categoryId: string;
    setCategoryId: (id: string) => void;
}

// store
export const useAppStore = create<AppState>((set) => ({
    categoryId: '0',
    setCategoryId: (id) => set({ categoryId: id }),
}));
