const reducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case "get_data_post":
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};

export default reducer;
