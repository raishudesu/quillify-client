import { create } from "zustand";
import { IBlogs, TUpdatePostData } from "../lib/types";
import { successToast } from "../lib/toasts";

export const useBlogs = create<IBlogs>((set) => ({
  blogs: [],
  searchedBlogs: [],
  viewBlog: null,
  userBlogs: [],
  getBlogs: async () => {
    try {
      const res = await fetch("/api/blogs/getBlogs");
      const blogs = await res.json();
      set({ blogs });
      return blogs;
    } catch (error) {
      console.log(error);
    }
  },
  getBlog: async (postId: string) => {
    try {
      const res = await fetch(`/api/blogs/getBlog/${postId}`);
      const viewBlog = await res.json();
      set({ viewBlog });
      console.log(viewBlog);
      return viewBlog;
    } catch (error) {
      console.log(error);
    }
  },
  searchBlogs: async (searchParams: string) => {
    try {
      const res = await fetch(`/api/blogs/search/${searchParams}`);

      const data = await res.json();
      set({ searchedBlogs: data });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
  getUserBlogs: async (authorId: string) => {
    try {
      const res = await fetch(`/api/blogs/getUserBlogs/${authorId}`);
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
    token: string,
    tags: string[]
  ) => {
    try {
      const res = await fetch("/api/blogs/createBlog", {
        method: "POST",
        body: JSON.stringify({
          title,
          summary,
          content,
          author,
          authorId,
          tags,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": token,
        },
      });

      const data = await res.json();
      successToast("Blog posted");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
  deletePost: async (userId: string, postId: string, token: string) => {
    try {
      const res = await fetch(`/api/blogs/deleteBlog/${userId}/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": token,
        },
      });
      const data = await res.json();
      successToast("Blog deleted");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
  editPost: async (postData: TUpdatePostData) => {
    const { postId, userId, body, token } = postData;
    try {
      const res = await fetch(`/api/blogs/updateBlog/${userId}/${postId}`, {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": token as string,
        },
      });
      const data = await res.json();
      successToast("Blog updated");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
}));
