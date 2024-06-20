export interface PostCreate {
    postId: string;
  title: string;
  content: string;
}

export interface Post extends PostCreate {
  postId: string;
  creationDate: Date;
  filepath: string;
}

export interface PostWithUser extends Post {
  username: string;
  userId: string;
}
