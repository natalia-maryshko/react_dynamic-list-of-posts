import { Comment } from '../types/Comment';
import { Post } from '../types/Post';
import { User } from '../types/User';
import { client } from '../utils/fetchClient';

export const getUsers = () => {
  return client.get<User[]>('/users');
};

export const getPosts = (id: number | undefined) => {
  return client.get<Post[]>(`/posts?userId=${id}`);
};

export const getComments = (postId: number) => {
  return client.get<Comment[]>(`/comments?postId=${postId}`);
};

export const deleteComment = (id: number) => {
  return client.delete(`/comments/${id}`);
};

export const addComment = ({
  postId, name, email, body,
}: Omit<Comment, 'id'>) => {
  return client.post<Comment>('/comments', {
    postId, name, email, body,
  });
};