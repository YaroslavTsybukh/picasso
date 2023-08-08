export interface IPostComment {
    postId: number,
    name: string,
    email: string,
    body: string,
    id: string
}

type Comment = 'postId' | 'name' | 'email' | 'body'

export type CreateComment = Record<Comment, string>