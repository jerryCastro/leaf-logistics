import { create } from "zustand";

import { Category, Country, Filter } from "~/types";

const useFilter = create<
  Filter & {
    setQuery: (q: string) => void;
    setCountry: (country: Country) => void;
    setCategory: (category: Category) => void;
  }
>((set) => ({
  q: "",
  country: Country.GB,
  category: Category.All,
  setQuery(q: string) {
    set((state) => ({ ...state, q }));
  },
  setCountry(country: Country) {
    set((state) => ({ ...state, country }));
  },
  setCategory(category: Category) {
    set((state) => ({ ...state, category }));
  },
}));

export default useFilter;
