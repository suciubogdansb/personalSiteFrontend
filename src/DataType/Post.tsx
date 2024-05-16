export interface PostCreate{
    title: string,
    content: string

}

export interface Post extends PostCreate {
    postId: string,
}

export interface PostWithUser extends Post {
    username: string
}

