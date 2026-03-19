export type Post = {
  title: string
  body: string
  id: number
}

export type FomrData = Omit<Post, 'id'>
