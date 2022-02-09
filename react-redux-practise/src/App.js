import React from "react";
import "./App.css";
import Header from "./containers/Header";
import { Route, Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import { PageNotFound } from "./containers/PageNotFound";
function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* <Route path="*" element={<p>404 page not found</p>} exact /> */}
        <Route path="*" element={<PageNotFound />} exact />
        <Route path="/" exact element={<ProductListing />} />
        <Route path="/product/:productId" exact element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
