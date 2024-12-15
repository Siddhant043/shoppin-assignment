import { create } from "zustand";
import { devtools } from "zustand/middleware";

type SearchStoreTypes = {
  searchText: string;
  setSearchText: (value: string) => {};
  getSearchString: () => string;
};

export const useSearchStore = create<SearchStoreTypes>()(
  devtools((set, get) => ({
    searchText: "",
    setSearchText: (value: string) => {
      set((state) => ({
        searchText: value,
      }));
    },
    getSearchString: () => {
      return get().searchText;
    },
  }))
);
