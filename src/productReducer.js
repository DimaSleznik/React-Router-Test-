const intialState = {
  product: [],
  error:false
};
export default function productReducer(state = intialState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return { product: action.payload };
    case "ERROR_FETCH":
        return{product:[],error:action.error}
    default:
      return state;
  }
}
