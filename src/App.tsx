import { useDebounce } from "use-debounce";
import Container from "@mui/material/Container";

import SearchBox from "./components/SearchBox";
import CategoryFilter from "./components/CategoryFilter";
import NewsBoard from "./components/NewsBoard";
import PrimaryDialog from "./components/PrimaryDialog";
import { useTopNews } from "./queries";
import { useFilter } from "./hooks";

export default function App() {
  const { q, country, category } = useFilter((state) => state);

  const [debouncedQuery] = useDebounce(q, 500);

  const { data } = useTopNews({ q: debouncedQuery, country, category });

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        paddingX: "0 !important",
      }}
    >
      <SearchBox />
      <CategoryFilter />
      <NewsBoard data={data.articles} />
      <PrimaryDialog />
    </Container>
  );
}
