import {useTokenStore} from "../Store/TokenStore";
import {useUserStore} from "../Store/UserStore";
import {User} from "../DataType/User";
import {PostWithUser} from "../DataType/Post";
import {usePostStore} from "../Store/PostStore";

export class SocketService {
    private setBackendUp = useTokenStore((state) => state.setBackendUp);

    private addUser = useUserStore((state) => state.addUser);
    private removeUser = useUserStore((state) => state.removeUser);
    private updateUser = useUserStore((state) => state.updateUser);
    private getUser = useUserStore((state) => state.getUser);

    private getPost = usePostStore((state) => state.getPost);
    private addPost = usePostStore((state) => state.addPost);
    private removePost = usePostStore((state) => state.removePost);
    private updatePost = usePostStore((state) => state.updatePost);

    onConnect() {
        this.setBackendUp(true);
        console.log("Backend is up");
    }

    onDisconnect() {
        this.setBackendUp(false);
        console.log("Backend is down");
    }

    onUserCreated(eventData: any) {
        const newUser: User = eventData["user"] as User;
        if(this.getUser(newUser.userId) === undefined) {
            this.addUser(newUser);
        }
    }

    onUserPromoted(eventData: any) {
        const newUser: User = eventData["user"] as User;
        this.updateUser(newUser);
    }

    onUserDeleted(eventData: any) {
        const removedId = eventData["userId"]
        this.removeUser(removedId);
    }

    onPostCreated(eventData: any) {
        const newPost: PostWithUser = eventData["post"];
        console.log(newPost);
        newPost.creationDate = new Date(newPost.creationDate);
        console.log(newPost);
        if(this.getPost(newPost.postId) === undefined) {
            this.addPost(newPost);
        }
    }

    onPostUpdated(eventData: any) {
        const updatedPost: PostWithUser = eventData["post"] as PostWithUser;
        updatedPost.creationDate = new Date(updatedPost.creationDate);
        this.updatePost(updatedPost);
    }

    onPostDeleted(eventData: any) {
        const removedId = eventData["postId"]
        this.removePost(removedId);
    }
}

