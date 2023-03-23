import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { News } from "~/types";

export enum DialogType {
  Closed,
  Details,
}

export type DetailsDialogProps = News;

export type DialogProps = DetailsDialogProps | null;

export type DialogState = {
  type?: DialogType;
  body?: DialogProps;
};

export const { reducer, actions } = createSlice<
  DialogState,
  {
    open: CaseReducer<DialogState, PayloadAction<DialogState>>;
    close: CaseReducer<DialogState>;
  }
>({
  name: "dialog",
  initialState: {},
  reducers: {
    open: (state, { payload }) => payload,
    close: () => ({}),
  },
});

export function useOpenDialog() {
  const dispatch = useDispatch();
  return (payload: DialogState) => dispatch(actions.open(payload));
}

export function useCloseDialog() {
  const dispatch = useDispatch();
  return () => dispatch(actions.close());
}
