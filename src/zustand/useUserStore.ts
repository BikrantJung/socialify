import { IUserProfile } from "@/packages/types/auth/profile.types";
import { create } from "zustand";
// import { type User } from "../types/user.types";
interface IUserStore {
  user: IUserProfile | undefined;
  setUser: (userData: IUserProfile | undefined) => void;
  resetUser: () => void;
}
const initialUserData = undefined;

export const useUserStore = create<IUserStore>()((set) => ({
  user: initialUserData,
  setUser(userData) {
    set({ user: userData });
  },
  resetUser() {
    set(() => ({
      user: initialUserData,
    }));
  },
}));
