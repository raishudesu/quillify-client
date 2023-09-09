export interface IUser {
  username: string;
  token: string;
  iat: number;
  exp: number;
  success: boolean;
}

export interface IAuth {
  currentUser: TCurrentUser | null;
  currentSession: TCurrentSession | null;
  userLogin: (email: string, password: string) => Promise<void>;
  userRegister: (
    username: string,
    email: string,
    password: string
  ) => Promise<void>;
  getUserSession: () => void;
  userLogout: () => void;
}

export interface IBlogs {
  blogs: TBlogs[] | null;
  viewBlog: TBlogs | null;
  getBlogs: () => void;
  getBlog: (postId: string) => void;
}

export type TBlogs = {
  author: string;
  authorId: string;
  content: string;
  createdAt: string;
  summary: string;
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
  postId: string;
};

export type TUserCredentials = {
  username: string;
  password: string;
};

export type TCurrentUser = {
  success: boolean;
  token: string;
  userId: string;
  username: string;
};

export type TCurrentSession = {
  success: boolean;
  id: string;
  username: string;
  iat: number;
  exp: number;
  token: string;
};
