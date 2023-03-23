import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import { Category } from "~/types";
import { useFilter } from "~/hooks";

const categories = [
  { value: Category.All, label: "All" },
  { value: Category.Business, label: "Business" },
  { value: Category.Entertainment, label: "Entertainment" },
  { value: Category.General, label: "General" },
  { value: Category.Health, label: "Health" },
  { value: Category.Science, label: "Science" },
  { value: Category.Sports, label: "Sports" },
  { value: Category.Technology, label: "Technology" },
];

export default function CategoryFilter() {
  const { category, setCategory } = useFilter((state) => state);

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
      }}
    >
      <TabContext value={category || Category.All}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TabList
            onChange={(e, value) => setCategory(value)}
            variant="scrollable"
          >
            {categories.map((props) => (
              <Tab
                key={props.value}
                sx={{ textTransform: "inherit" }}
                {...props}
              />
            ))}
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
