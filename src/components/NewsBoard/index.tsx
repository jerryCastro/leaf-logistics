import Grid from "@mui/material/Grid";

import { News } from "~/types";

import NewsItem from "../NewsCard";

type Props = { data: Array<News> };

export default function NewsBoard({ data }: Props) {
  return (
    <Grid container spacing={2} sx={{ marginY: 2, paddingX: 4, flex: 1 }}>
      {data.map((news) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={news.url}>
          <NewsItem {...news} />
        </Grid>
      ))}
    </Grid>
  );
}
