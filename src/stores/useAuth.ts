import { create } from "zustand";
import { IAuth, IUpdateUserProfile } from "../lib/types";

export const useAuth = create<IAuth>((set) => ({
  currentUser: null,
  currentSession: null,
  userLogin: async (email: string, password: string) => {
    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
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
      const userData = await res.json();
      console.log("Logged in: ", userData);

      if (userData.name === "ZodError" || userData.success === false) return;

      set({ currentUser: userData });
      useAuth.getState().getUserSession();
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
      if (userSession.message === "jwt expired") {
        return set({ currentUser: null });
      }
      console.log("User data: ", userSession);
      set({ currentUser: userSession });
    } catch (error) {
      set({ currentUser: null });
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
  updateUserProfile: async (
    newUsername: string,
    newEmail: string,
    id: string,
    password: string,
    token: string
  ) => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/auth/updateUserProfile/${id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            username: newUsername,
            email: newEmail,
            password,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": token,
          },
        }
      );
      const data = await res.json();

      // UPDATE THE CURRENTUSER STATE FOR REAL-TIME CLIENT UPDATES
      if (data.success) {
        const oldUser = useAuth.getState().currentUser;
        const newUser = {
          ...oldUser,
          username: data.updatedCredentials.username,
          email: data.updatedCredentials.email,
        };

        set({ currentUser: newUser as IUpdateUserProfile });
      }
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  },
  updateUserPwd: async (
    pwd: string,
    newPwd: string,
    confirmNewPwd: string,
    id: string,
    token: string
  ) => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/auth/updateUserPwd/${id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            password: pwd,
            newPwd,
            confirmNewPwd,
          }),
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
}));

useAuth.getState().getUserSession();
