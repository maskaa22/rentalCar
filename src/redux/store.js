import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import CarsReducer from "./cars/slice";
import BrandsReducer from "./brands/slice";
import FilterReducer from "./filters/slice";
import FavoritesReducer from "./favorites/slice";
import loaderReducer from "./loader/slice";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    cars: CarsReducer,
    brands: BrandsReducer,
    filters: FilterReducer,
    favorites: persistReducer(favoritesPersistConfig, FavoritesReducer),
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
