import { create } from "zustand";
import { IBlogs } from "../lib/types";

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
}));
