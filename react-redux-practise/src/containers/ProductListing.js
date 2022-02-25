import React, { useEffect } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
const ProductListing = () => {
  const products = useSelector((state) => state.allproducts.products);
  const dispatch = useDispatch();
  const fetchproduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchproduct();
  }, []);

  console.log("products", products);

  return (
    <div className="ui grid container">
      {/* <h1>Hello</h1> */}
      <ProductComponent />
    </div>
  );
};
export default ProductListing;
