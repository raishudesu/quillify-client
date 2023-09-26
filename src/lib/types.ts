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
  updateUserProfile: (
    newUsername: string,
    newEmail: string,
    id: string,
    password: string,
    token: string
  ) => void;
  updateUserPwd: (
    pwd: string,
    newPwd: string,
    confirmNewPwd: string,
    id: string,
    token: string
  ) => void;
}

export interface IBlogs {
  blogs: TBlogs[] | null;
  viewBlog: TBlogs | null;
  userBlogs: TBlogs[] | null;
  searchedBlogs: TBlogs[] | null;
  getBlogs: () => void;
  getBlog: (postId: string) => void;
  searchBlogs: (tags: string) => void;
  getUserBlogs: (authorId: string) => void;
  createPost: (
    title: string,
    summary: string,
    content: string,
    author: string,
    authorId: string,
    token: string,
    tags: string[]
  ) => void;
  deletePost: (userId: string, postId: string, token: string) => void;
  editPost: (postData: TUpdatePostData) => void;
}

export type TBlogs = {
  author: string;
  authorId: string;
  content: string | TrustedHTML;
  createdAt: string;
  summary: string;
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
  postId: string;
  tags: string[];
};

export type TUserCredentials = {
  username: string;
  password: string;
};

export type TCurrentUser = {
  success: boolean;
  token: string;
  id: string;
  userId: string;
  username: string;
  createdAt: string;
  email: string;
};

export type TCurrentSession = {
  success: boolean;
  id: string;
  username: string;
  iat: number;
  exp: number;
  token: string;
};

export type TUpdatePostData = {
  userId: string | undefined;
  postId: string | undefined;
  token: string | undefined;
  body: object | undefined;
};

export interface IUpdateUserProfile extends TCurrentUser {
  username: string;
  email: string;
}
