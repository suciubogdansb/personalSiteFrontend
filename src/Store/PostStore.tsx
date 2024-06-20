import { PostWithUser } from "../DataType/Post";
import { create } from "zustand";

interface PostStore {
    posts: PostWithUser[];
    setPosts: (posts: PostWithUser[]) => void;
    addPost: (post: PostWithUser) => void;
    removePost: (postId: string) => void;
    updatePost: (post: PostWithUser) => void;
    getPost: (postId: string) => PostWithUser | undefined;
}

export const usePostStore = create<PostStore>()((set, get) => ({
    posts: [],
    setPosts: (posts) => set({ posts }),
    addPost: (post) => set({ posts: [...get().posts, post] }),
    removePost: (postId) =>
        set({
            posts: get().posts.filter((post) => post.postId !== postId),
        }),
    updatePost: (post) =>
        set({
            posts: get().posts.map((p) => (p.postId === post.postId ? post : p)),
        }),
    getPost: (postId) => get().posts.find((post) => post.postId === postId),
}));
