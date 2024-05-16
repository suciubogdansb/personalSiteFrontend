import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

interface tokenStore{
    token: string;
    setToken: (token: string) => void;
    getToken: () => string;
    removeToken: () => void;
}

export const useTokenStore = create<tokenStore>()(
    persist(
        (set, get) => ({
            token: "",
            setToken: (token) => set({token}),
            getToken: () => get().token,
            removeToken: () => set({token: ""})
        }),
        {
            name: "token-store",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
);
