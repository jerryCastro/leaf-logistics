import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import { News } from "~/types";
import { DialogType, useOpenDialog } from "~/store/reducers/dialog";

export default function NewsCard(props: News) {
  const { title, description, author, publishedAt, url, urlToImage } = props;

  const open = useOpenDialog();

  return (
    <Card
      sx={{
        marginX: "auto",
        maxWidth: 345,
        alignSelf: "center",
        boxShadow: "none",
        border: "1px solid #ccc",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {author?.[0]?.toUpperCase() || "?"}
          </Avatar>
        }
        title={
          <Typography
            sx={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
        }
        subheader={publishedAt}
        sx={{ ".MuiCardHeader-content": { overflow: "hidden" } }}
      />
      {urlToImage && (
        <CardMedia
          component="img"
          height="194"
          image={urlToImage}
          alt={title}
        />
      )}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description || title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "end" }}>
        <Button onClick={() => open({ type: DialogType.Details, body: props })}>
          Read More
        </Button>
        <Link href={url} target="_blank" sx={{ textDecoration: "none" }}>
          <Button>Visit</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
