import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { useFilter } from "~/hooks";

import LocationFilter from "../LocationFilter";

export default function SearchBox() {
  const { q, setQuery } = useFilter((state) => state);

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: 1e4,
        overflow: "hidden",
        maxWidth: 500,
        paddingLeft: 2,
        marginTop: 4,
      }}
    >
      <SearchIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
      <InputBase
        sx={{ px: 1, flex: 1 }}
        placeholder="Search"
        value={q || ""}
        onChange={(e) => setQuery(e.target.value)}
      />
      <LocationFilter />
    </Box>
  );
}
