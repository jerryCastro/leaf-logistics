import Country from "./Country";
import Category from "./Category";

type Filter = {
  q?: string;
  country?: Country;
  category?: Category;
};

export default Filter;
