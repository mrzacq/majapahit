export const getPosts = () => {
  return (dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "get_data_post",
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "get_data_post",
          payload: [],
        });
      });
  };
};
