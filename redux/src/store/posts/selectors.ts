import { get } from "lodash";
import { Store } from "redux";

export const getPosts = (store: Store) => get(store, "posts", {});