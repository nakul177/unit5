import { ADD_TODO } from "./actions"

export const reducer = (store, { type, payload }) => {
  switch (type) {

  case ADD_TODO:
    return { ...store, ...payload }

  default:
    return store
  }
}
