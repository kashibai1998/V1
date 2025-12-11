const incrementAction = (count) => {
  let newcount = count + 1;
  return {
    type: "INCREMENT",
    payload: newcount,
  };
};
export default incrementAction;