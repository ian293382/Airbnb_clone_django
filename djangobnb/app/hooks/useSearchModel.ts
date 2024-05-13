import { create } from 'zustand';

export type SearchQuery = {
    country: string;
    checkIn: Date | null;
    checkout: Date | null;
    guests: number;
    bathrooms: Number;
    bedrooms: Number;
    category: string;
}

interface SearchModelStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    query: SearchQuery;
    setQuery: (query: SearchQuery) => void;
}

const useLoginModel= create<SearchModelStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true}),
    close: () => set({ isOpen: false}),
    setQuery: (query: SearchQuery) => set({ query: query }),
    query: {
        country:'',
        checkIn: null,
        checkout: null,
        guests: 1,
        bedrooms: 0,
        bathrooms: 0,
        category: ''
    }
}))

export default useLoginModel;