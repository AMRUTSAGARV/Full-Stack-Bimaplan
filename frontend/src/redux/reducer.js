import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "./action_types";

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return; //todo;

    case CREATE:
      return; //todo;

    case UPDATE:
      return; //todo;

    case DELETE:
      return; //todo;
    default:
      return posts;
  }
};
