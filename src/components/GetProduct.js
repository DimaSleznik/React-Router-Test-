import { React, useEffect } from "react";
import { connect } from "react-redux";
import { getProduct } from "../actions";

const GetProduct = function ({ product, getProduct }) {
  console.log(product);
  useEffect(() => {
    getProduct();
  }, [getProduct]);
  return (
    <div>
      {product.map((element) => {
        return (
          <div key={element.id}>
            <li>{element.title}</li>
            <img src={element.url} alt="product_img"></img>
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    product: state.product.product,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: () => {
      dispatch(getProduct());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GetProduct);
