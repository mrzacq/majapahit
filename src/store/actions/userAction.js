export const makeOnline = () => {
  return (dispatch) => {
    dispatch({
      type: "online",
      payload: true,
    });
  };
};

export const makeOffline = () => {
  return (dispatch) => {
    dispatch({
      type: "offline",
      payload: false,
    });
  };
};
