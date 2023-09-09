import { create } from "zustand";
import { IBlogs } from "../lib/types";

export const useBlogs = create<IBlogs>((set) => ({
  blogs: [],
  viewBlog: null,
  getBlogs: async () => {
    try {
      const response = await fetch("http://localhost:4000/api/blogs");
      const blogs = await response.json();
      set({ blogs });
      return blogs;
    } catch (error) {
      console.log(error);
    }
  },
  getBlog: async (postId: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/blogs/${postId}`);
      const viewBlog = await response.json();
      set({ viewBlog });
      return viewBlog;
    } catch (error) {
      console.log(error);
    }
  },
}));
