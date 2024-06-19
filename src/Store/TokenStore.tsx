import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import {Role} from "../DataType/Role";

interface tokenStore {
    backendUp: boolean,
    token: string;
    role: Role | null;
    setRole: (role: Role) => void;
    setToken: (token: string) => void;
    setBackendUp: (backendUp: boolean) => void;
    getToken: () => string;
    removeToken: () => void;
}

export const useTokenStore = create<tokenStore>()(
    persist(
        (set, get) => ({
            backendUp: false,
            token: "",
            role: null,
            setRole: (role) => set({role}),
            setToken: (token) => set({token}),
            setBackendUp: (backendUp) => set({backendUp}),
            getToken: () => get().token,
            removeToken: () => set({token: ""}),
        }),
        {
            name: "token-store",
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
);
