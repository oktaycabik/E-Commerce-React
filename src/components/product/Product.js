import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";

import {
  getProducts,
  addToUserFavorite,
  unToUserFavorite,
} from "../../redux/Products/productSlice";
import {
  addToProductFavorite,
  unToProductFavorite,
} from "../../redux/Auth/authSlice";
import "./product.css";
import { getProfileById } from "../../redux/Auth/authSlice";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import SortProduct from "./SortProduct";
import FilterCategory from "./FilterCategory";
import FilterBrand from "./FilterBrand";
import FilterDetails from "./FilterDetails";
import { addCart, addCartOrder, inraceQuantity, inraceQuantity2 } from "../../redux/Cart/cartSlice";

function Product() {
  const [sort, setSort] = useState("önerilen");
  const { id } = useParams();
  const newCart = useSelector((state) => state.cart.newCart);
  const products = useSelector((state) => state.item.product);
  const loading = useSelector((state) => state.item.loading);
  const user = useSelector((state) => state.user.profile);
  const cart = useSelector((state) => state.cart.items);
  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(cart));
    localStorage.setItem("product_id", JSON.stringify(newCart));
  }, [cart,newCart]);
  const dispatch = useDispatch();
  
  const userId = localStorage.getItem("id");
  const formik = useFormik({
    initialValues: {
      brand: [],
      kullanım: [],
      category: [],
    },

    onSubmit: async (values) => {},
  });
  useEffect(() => {
    (async () => {
      dispatch(
        getProducts([
          sort,
          formik.values.brand.join("|"),
          formik.values.kullanım.join("|"),
          formik.values.category.join("|"),
          id,
        ])
      );
      dispatch(getProfileById(userId));
    })();
  }, [
    dispatch,
    sort,
    userId,
    formik.values.brand,
    formik.values.kullanım,
    formik.values.category,
    id,
  ]);
  

  const addToCart = (productName,productId) => {
    const copyCart = cart.findIndex(
      (pro) => pro.product._id === productName._id
    );
   
 console.log('copyCart', copyCart)
 
    if (copyCart > -1 ) {
      dispatch(inraceQuantity(copyCart));
      
    } else if (copyCart === -1 ) {
      dispatch(addCart({ product: productName, quantity: 1 }));
     
    }
  };
  const addToFavorite = (productId) => {
    const b = products.filter((a) => a._id === productId);

    const a = user?.favorites?.map((a) => a._id);

    if (b[0]?.favori?.includes(userId) && a?.includes(productId)) {
      dispatch(unToProductFavorite(productId));
      dispatch(unToUserFavorite(productId));
    } else if (!b[0]?.favori?.includes(userId) && !a?.includes(productId)) {
      dispatch(addToProductFavorite(productId));
      dispatch(addToUserFavorite(productId));
    }
  };
  const truncateString = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)}...`;
  };

  return (
    <>
    
      

      <div className="row mt-3">
      
        <div style={{ backgroundColor: "#fefefe" }} className="col-md-2 p-2">
          <FilterCategory formik={formik} />
          <FilterBrand formik={formik} />
          <FilterDetails formik={formik} />
        </div>

        <div className=" col-md-10">
          {loading && <div className="loading col-md-10">Loading...</div>}
          {!loading && (
            <div style={{ backgroundColor: "#fefefe" }} className="row p-2 ">
              <div className="d-flex justify-content-between p-2">
                <h5><b>"{id}" araması için {products.length} sonuç listeleniyor</b> </h5>
                <SortProduct sort={sort} setSort={setSort} />
              </div>
             
              {products.map((pro) => (
                <div key={pro._id} className="col-md-3 col-sm-4  ">
                  <div className="product-grid  a">
                    <div className="product-image border-bottom">
                      <Link
                        to={`/product/${pro._id}/${pro.name}`}
                        className="image"
                      >
                        <img
                          alt=""
                          className="img-1 h-75 "
                          src={`/${pro?.product_image}`}
                        />
                      </Link>
                      <ul className="product-links">
                        <li>
                          <a href="#/" onClick={() => addToCart(pro,pro._id)}>
                            <FaShoppingCart />
                          </a>
                        </li>
                        <li>
                          <a href="#/" onClick={() => addToFavorite(pro._id)}>
                            <FaHeart />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-content text-start">
                      <h2 className="title">
                        <strong>
                          <span className="txs-14">{pro.brand}</span>{" "}
                        </strong>
                      </h2>
                      <div className="card-text">
                        <small> {truncateString(pro.name, 45)}</small>
                      </div>
                      <div className="price primary-colorw">
                        {" "}
                        <>{pro.price} TL </>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
