import {PostWithUser} from "../DataType/Post";

export default function useGetPost(
    postId: string | undefined,
    getPost: (postId: string) => PostWithUser | undefined
){
    if (postId === undefined) {
        return undefined;
    }
    return getPost(postId);
}