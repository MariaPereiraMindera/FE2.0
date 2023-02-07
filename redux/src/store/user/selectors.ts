import { get } from "lodash";
import { Store } from "redux";

export const getUsername = (store: Store) =>
  get(store, "user.username", "");