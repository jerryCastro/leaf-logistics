import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "@mui/material/Link";

import { useStoreSelector } from "~/store";
import { DetailsDialogProps, useCloseDialog } from "~/store/reducers/dialog";

export default function DetailsDialog() {
  const { title, url, description, content } = useStoreSelector(
    ({ dialog }) => dialog.body
  ) as DetailsDialogProps;

  const close = useCloseDialog();

  return (
    <>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers={true}>
        <DialogContentText>{content || description || title}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Link href={url} target="_blank" sx={{ textDecoration: "none" }}>
          <Button>Visit</Button>
        </Link>
        <Button onClick={close}>Close</Button>
      </DialogActions>
    </>
  );
}
