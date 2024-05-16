import {Post, PostWithUser} from "../DataType/Post";
import {create} from "zustand";

interface PostStore {
    posts: PostWithUser[];
    setPosts: (posts: PostWithUser[]) => void;
    getPosts: () => PostWithUser[];
    addPost: (post: PostWithUser) => void;
    removePost: (postId: string) => void;

    privatePosts: Post[];
    setPrivatePosts: (posts: Post[]) => void;
    getPrivatePosts: () => Post[];
    addPrivatePost: (post: Post) => void;
    removePrivatePost: (postId: string) => void;
}

export const usePostStore = create<PostStore>()(
    (set, get) => ({
        posts: [],
        setPosts: (posts) => set({posts}),
        getPosts: () => get().posts,
        addPost: (post) => set((state) =>
            ({posts: [...state.posts, post]})),
        removePost: (postId) => set((state) =>
            ({posts: state.posts.filter(post => post.postId !== postId)})),
        privatePosts: [],
        setPrivatePosts: (posts) => set({privatePosts: posts}),
        getPrivatePosts: () => get().privatePosts,
        addPrivatePost: (post) => set((state) =>
            ({privatePosts: [...state.privatePosts, post]})),
        removePrivatePost: (postId) => set((state) =>
            ({privatePosts: state.privatePosts.filter(post => post.postId !== postId)}))
    })
);