const decrementAction = (count) => {
  let newcount = count - 1;
  return {
    type: "DECREMENT",
    payload: newcount,
  };
};
export default decrementAction;