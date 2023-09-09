import { create } from "zustand";
import { IAuth } from "../lib/types";

export const useAuth = create<IAuth>((set) => ({
  currentUser: null,
  currentSession: null,
  userLogin: async (email: string, password: string) => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        credentials: "include", // to inlcude user session
      });
      const userData = await response.json();
      set({ currentUser: userData });
      useAuth.getState().getUserSession();
      console.log("Logged in: ", userData);
    } catch (error) {
      console.log(error);
    }
  },
  userRegister: async (username: string, email: string, password: string) => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const userData = await response.json();
      console.log("Registered successfully: ", userData);
    } catch (error) {
      console.log(error);
    }
  },
  getUserSession: async () => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/getUser", {
        credentials: "include",
      });
      const userSession = await response.json();
      console.log("User data: ", userSession);
      set({ currentUser: userSession });
    } catch (error) {
      console.log(error);
    }
  },
  userLogout: async () => {
    try {
      const res = await fetch("http://localhost:4000/api/auth/logout", {
        credentials: "include",
        method: "POST",
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    set({ currentSession: null });
    set({ currentUser: null });
  },
}));

useAuth.getState().getUserSession();
