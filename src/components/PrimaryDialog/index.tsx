import Dialog from "@mui/material/Dialog";

import { useStoreSelector } from "~/store";
import { DialogType, useCloseDialog } from "~/store/reducers/dialog";

import DetailsDialog from "./DetailsDialog";

export default function PrimaryDialog() {
  const type = useStoreSelector(({ dialog }) => dialog.type);

  const close = useCloseDialog();

  return (
    <Dialog open={!!type} onClose={close} scroll="paper">
      {type === DialogType.Details && <DetailsDialog />}
    </Dialog>
  );
}
