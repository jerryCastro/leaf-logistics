import axios from "axios";
import { useQuery } from "react-query";

import { Filter, Category } from "~/types";

const API_URL = import.meta.env.VITE_API_URL || "https://newsapi.org/v2";
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getTopNews({ category, ...params }: Filter) {
  const { data } = await axios.get(`${API_URL}/top-headlines`, {
    params: {
      ...params,
      category: category !== Category.All ? category : undefined,
      apiKey: API_KEY,
    },
  });
  return data;
}

export function useTopNews(params: Filter) {
  return useQuery(["news", params], () => getTopNews(params), {
    initialData: { articles: [] },
  });
}
