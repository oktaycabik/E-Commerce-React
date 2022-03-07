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
import { addCart, inraceQuantity } from "../../redux/Cart/cartSlice";

function Product() {
  const [sort, setSort] = useState("önerilen");
  const { id } = useParams();

  const products = useSelector((state) => state.item.product);
  const user = useSelector((state) => state.user.profile);
  const cart = useSelector((state) => state.cart.items);
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
    id
    
  ]);
  useEffect(() => {
    localStorage.setItem("product",JSON.stringify(cart))
  }, [cart])
  
  const addToCart = (productName) => {
    const copyCart = cart.findIndex(
      (pro) => pro.product._id === productName._id
    );
    
    if (copyCart > -1) {
      dispatch(inraceQuantity(copyCart));
    } else if (copyCart === -1) {
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
  const truncateString=(string,maxLength)=>{
    if(!string) return null;
    if(string.length <= maxLength) return string;
    return `${string.substring(0,maxLength)}...`;
  }

  return (
    <>
    
    <img src={`../backend/public/uploads${products[0]?.product_image}`} alt="" />
    
      <SortProduct sort={sort} setSort={setSort} />

      <div className="row">
        <div style={{ backgroundColor: "#fefefe" }} className="col-md-2 p-2">
          <FilterCategory formik={formik} />
          <FilterBrand formik={formik} />
          <FilterDetails formik={formik} />
        </div>
          
        <div className=" col-md-10">
          <div style={{ backgroundColor: "#fefefe" }} className="row p-2 ">
           
            <h5>
              "{id}" araması için {products.length} sonuç
              listeleniyor
            </h5>
            {products.map((pro) => (
              <div key={pro._id} className="col-md-3 col-sm-6  ">
                <div className="product-grid  a">
                  <div className="product-image border-bottom">
                    <Link
                      to={`/product/${pro._id}/${pro.name}`}
                      className="image"
                    >
                      <img
                        alt=""
                        className="img-1 "
                        src={`/${pro?.product_image}`}
                      />
                    </Link>
                    <ul className="product-links">
                      <li>
                        <a href="#/" onClick={() => addToCart(pro)}>
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
                      <strong><small>{pro.brand}</small>  </strong>
                      
                    </h2>
                    <div className="card-text"> 
                    <small> {truncateString(pro.name,45)}</small>
                   
                    </div>
                    <div className="price text-success">
                      {" "}
                      <b>{pro.price} TL </b>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
