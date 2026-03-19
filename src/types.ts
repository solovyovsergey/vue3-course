export type Post = {
  title: string
  body: string
  id: number
}

export type PostFormData = Omit<Post, 'id'>
