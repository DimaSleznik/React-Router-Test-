export const getProduct = () => {
  return (dispatch) => {
    console.log("GET PRODUCT");
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        .catch((err) => dispatch(error_product(err)))
        .then((response) => response.json())
        .then((json) => {
          dispatch(pullProduct(json));
        });
    }, 500);
  };
};
export const error_product = (err) => {
  console.log("FETCH_ERROR");
  return {
    type: "ERROR_FETCH",
    error: err,
  };
};
export const pullProduct = (product_list) => {
  let product_payload = product_list;
  if (!Array.isArray(product_list)) {
    product_payload = [product_list];
  }
  return {
    type: "GET_PRODUCT",
    payload: product_payload,
  };
};
