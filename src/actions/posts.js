import { UPDATE_POSTS } from './actionTypes';

export function fetchPosts() {
  return (dispatch) => {
    const url = 'http://localhost:8000/api/v1/posts?page=1&limit=5';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.posts);
        dispatch(updatePosts(data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
