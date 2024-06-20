import {User} from "../DataType/User";
import {create} from "zustand";

interface UserStore {
    users: User[];
    setUsers: (users: User[]) => void;
    getUsers: () => User[];
    addUser: (user: User) => void;
    removeUser: (userId: string) => void;
    updateUser: (user: User) => void;
    getUser: (userId: string) => User | undefined;
}

export const useUserStore = create<UserStore>()(
    (set, get) => ({
        users: [],
        setUsers: (users) => set({users}),
        getUsers: () => get().users,
        addUser: (user) => set((state) => ({users: [...state.users, user]})),
        removeUser: (userId) =>
            set((state) => ({
                users: state.users.filter((user) => user.userId !== userId),
            })),
        updateUser: (user) =>
            set((state) => ({
                users: state.users.map((u) => u.userId === user.userId ? user : u),
            })),
        getUser: (userId) => get().users.find((user) => user.userId === userId),
    })
);