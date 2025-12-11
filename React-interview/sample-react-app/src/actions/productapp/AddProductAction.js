const AddProductAction = (productList, newProduct) => {
  productList.push(newProduct);
  console.log(productList)
  return {
    type: "ADD_PRODUCT",
    payload: [...productList]
  };
};
export default AddProductAction;
