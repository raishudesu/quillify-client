import { create } from "zustand";
import { IAuth, IUpdateUserProfile } from "../lib/types";
import { errorToast, successToast } from "../lib/toasts";

export const useAuth = create<IAuth>((set) => ({
  currentUser: null,
  loginSuccess: false,
  registerSuccess: false,
  currentSession: null,
  userLogin: async ({ email, password }) => {
    try {
      const res = await fetch("/api/auth/login", {
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

      if (userData.name === "ZodError" || userData.success === false) {
        set({ loginSuccess: false });
        if (userData.message) {
          errorToast(userData.message);
        } else {
          errorToast("Invalid credentials");
        }

        return;
      }

      set({ currentUser: userData, loginSuccess: true });
      successToast("Logged in successfully");
      useAuth.getState().getUserSession();
    } catch (error) {
      console.log(error);
    }
  },
  userRegister: async ({ username, email, password }) => {
    try {
      const response = await fetch("/api/auth/register", {
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
      console.log(userData);

      if (userData.name === "ZodError" || userData.success === false) {
        set({ registerSuccess: false });
        if (userData.message) {
          errorToast(userData.message);
        } else {
          errorToast("Invalid credentials");
        }
        return;
      }

      set({ registerSuccess: true });
      successToast("Registered successfully");
    } catch (error) {
      console.log(error);
    }
  },
  getUserSession: async () => {
    try {
      const response = await fetch("/api/auth/getUser", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
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
      const res = await fetch("/api/auth/logout", {
        credentials: "include",
        method: "POST",
      });
      const data = await res.json();
      console.log(data);
      successToast("Logged out successfully");
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
      const res = await fetch(`/api/auth/updateUserProfile/${id}`, {
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
      });
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
        successToast("Profile updated");
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
      const res = await fetch(`/api/auth/updateUserPwd/${id}`, {
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
      });

      const data = await res.json();

      if (data.success) {
        successToast("Password updated");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
}));

useAuth.getState().getUserSession();
