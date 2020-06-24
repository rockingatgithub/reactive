import { UPDATE_POSTS } from '../actions/actionTypes';

export default function posts(state = [], action) {
  switch (action.types) {
    case UPDATE_POSTS:
      return action.posts;
    default:
      return state;
  }
}
