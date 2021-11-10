const reducer = (state = { isOnline: false }, action) => {
  switch (action.type) {
    case "online":
      return { ...state, isOnline: action.payload };
    case "offline":
      return { ...state, isOnline: action.payload };
    default:
      return state;
  }
};

export default reducer;
