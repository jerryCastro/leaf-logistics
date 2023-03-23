import { combineReducers } from "redux";

import { reducer as dialog } from "./dialog";

export const rootReducer = combineReducers({
  dialog,
});

export type RootState = ReturnType<typeof rootReducer>;
