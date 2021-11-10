const reducer = (
  state = { balance: 0, username: "anan", bank: "bank of america" },
  action
) => {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    default:
      return state;
  }
};

export default reducer;
