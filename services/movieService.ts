import {get} from "../network";
import paths from "../lib/paths";

export function getList() {
  return get(paths().movies.get())
}