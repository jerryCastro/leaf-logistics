import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { rootReducer, RootState } from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const useStoreSelector = useSelector<RootState>;

export default store;
