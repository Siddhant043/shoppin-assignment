import { create } from "zustand";
import { devtools } from "zustand/middleware";

type UserDataTypes = {
  name: string;
  photo: string;
  email: string;
};
type UserStoreProps = {
  userData: UserDataTypes;
  updateUserData: (data: UserDataTypes) => void;
  getUserData: () => UserDataTypes;
};

export const useUserStore = create<UserStoreProps>()(
  devtools((set, get) => ({
    userData: {
      name: "",
      photo: "",
      email: "",
    },
    updateUserData: (data: UserDataTypes) => {
      set((state) => ({
        userData: {
          ...data,
        },
      }));
    },
    getUserData: () => {
      return get().userData;
    },
  }))
);
