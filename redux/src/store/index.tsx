import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import postsReducer from "./posts";
import userReducer from "./user";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());

persistStore(store);

export default store;
