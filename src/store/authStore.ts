import { create } from 'zustand';

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    countryCode: string;
}

interface AuthStore {
    user: User | null;
    isLoggedIn: boolean;

    login: (user: User) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthStore>(set => ({
    user: null,
    isLoggedIn: false,

    login: user =>
        set({
            user,
            isLoggedIn: true,
        }),

    logout: () =>
        set({
            user: null,
            isLoggedIn: false,
        }),
}));