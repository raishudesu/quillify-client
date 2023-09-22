import { create } from "zustand";
import { IBlogs, TUpdatePostData } from "../lib/types";

export const useBlogs = create<IBlogs>((set) => ({
  blogs: [],
  viewBlog: null,
  userBlogs: [],
  getBlogs: async () => {
    try {
      const res = await fetch("http://localhost:4000/api/blogs/getBlogs");
      const blogs = await res.json();
      set({ blogs });
      return blogs;
    } catch (error) {
      console.log(error);
    }
  },
  getBlog: async (postId: string) => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/blogs/getBlog/${postId}`
      );
      const viewBlog = await res.json();
      set({ viewBlog });
      console.log(viewBlog);
      return viewBlog;
    } catch (error) {
      console.log(error);
    }
  },
  getUserBlogs: async (authorId: string) => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/blogs/getUserBlogs/${authorId}`
      );
      const userBlogs = await res.json();
      set({ userBlogs });
      return userBlogs;
    } catch (error) {
      console.log(error);
    }
  },
  createPost: async (
    title: string,
    summary: string,
    content: string,
    author: string,
    authorId: string,
    token: string
  ) => {
    try {
      const res = await fetch("http://localhost:4000/api/blogs/createBlog", {
        method: "POST",
        body: JSON.stringify({
          title,
          summary,
          content,
          author,
          authorId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": token,
        },
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
  deletePost: async (postId: string, token: string) => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/blogs/deleteBlog/${postId}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": token,
          },
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
  editPost: async (postData: TUpdatePostData) => {
    const { postId, userId, body, token } = postData;
    try {
      const res = await fetch(
        `http://localhost:4000/api/blogs/updateBlog/${userId}/${postId}`,
        {
          method: "PATCH",
          body: JSON.stringify(body),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": token as string,
          },
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
}));
