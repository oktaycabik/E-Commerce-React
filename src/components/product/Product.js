import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { Alert, Spinner,Offcanvas,Button } from "react-bootstrap";
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
import FilterBrand from "./FilterBrand";
import FilterDetails from "./FilterDetails";
import { addCart, inraceQuantity } from "../../redux/Cart/cartSlice";
import { useHistory } from "react-router-dom";
function Product({ loggedIn }) {
  const [sort, setSort] = useState("önerilen");
  const [show, setShow] = useState(false);
  const [showDanger, setShowDanger] = useState(false);
  const [shows, setShows] = useState(false);

  const handleClose = () => setShows(false);
  const handleShow = () => setShows(true);
  const { id } = useParams();

  let history = useHistory();
  const dispatch = useDispatch();

  const newCart = useSelector((state) => state.cart.newCart);
  const products = useSelector((state) => state.item.product);
  const loading = useSelector((state) => state.item.loading);
  const user = useSelector((state) => state.user.profile);
  const cart = useSelector((state) => state.cart.items);
  const title = useSelector((state) => state.item.title);
  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(cart));
    localStorage.setItem("product_id", JSON.stringify(newCart));
  }, [cart, newCart]);

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

          id,
          title,
        ])
      );
      dispatch(getProfileById(userId));
    })();
  }, [
    dispatch,
    title,
    sort,
    userId,
    formik.values.brand,
    formik.values.kullanım,
    formik.values.category,
    id,
  ]);

  const addToCart = (productName, productId) => {
    const copyCart = cart.findIndex(
      (pro) => pro.product._id === productName._id
    );

    if (copyCart > -1) {
      dispatch(inraceQuantity(copyCart));
    } else if (copyCart === -1) {
      dispatch(addCart({ product: productName, quantity: 1 }));
    }
  };
  const closeAlert = () => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  };
  const closeAlertDanger = () => {
    setTimeout(() => {
      setShowDanger(false);
    }, 1000);
  };
  const addToFavorite = (productId) => {
    const b = products.filter((a) => a._id === productId);
    const a = user?.favorites?.map((a) => a._id);

    if (loggedIn) {
      if (b[0]?.favori?.includes(userId) && a?.includes(productId)) {
        setShow(true);
        dispatch(unToProductFavorite(productId));
        dispatch(unToUserFavorite(productId));
      } else if (!b[0]?.favori?.includes(userId) && !a?.includes(productId)) {
        setShowDanger(true);
        dispatch(addToProductFavorite(productId));
        dispatch(addToUserFavorite(productId));
      }
    } else {
      history.push("/singin");
    }
  };
  const truncateString = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)}...`;
  };

  return (
    <>
      {show && (
        <>
          <div className="col-md-12 d-flex justify-content-end mt-0">
            <Alert
              className="p-2 alert-success"
              variant="success"
              onClose={closeAlert()}
            >
              <span>Favorilerime Eklendi</span>
            </Alert>
          </div>
        </>
      )}
      {showDanger && (
        <>
          <div className="col-md-12 d-flex justify-content-end">
            <Alert
              className="p-2 alert-danger"
              variant="danger"
              onClose={closeAlertDanger()}
            >
              <span>Favorilerimden Silindi</span>
            </Alert>
          </div>
        </>
      )}

      <div className="row mt-3">
        <div
          style={{ backgroundColor: "#fefefe" }}
          className="col-md-2 col-12 p-2"
        >
            <button
              className="canvas-btn btn w-100 filter-btn ms-2"
              onClick={handleShow}
            >
              Filtrele
            </button>
            <div className="res">
            <FilterBrand formik={formik} />
          <FilterDetails formik={formik} />
            </div>
        
        </div>
       
        <div className=" col-md-10 col-12">
          {loading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {!loading && (
            <div style={{ backgroundColor: "#fefefe" }} className="row p-2 ">
              <div className="d-flex justify-content-between p-2">
                <h5 style={{ fontSize: 18 }}>
                  <b>
                    "{id}" araması için {products.length} sonuç listeleniyor
                  </b>{" "}
                </h5>
                <SortProduct sort={sort} setSort={setSort} />
              </div>

              {products.map((pro) => (
                <div key={pro._id} className="col-lg-3 col-md-4 col-6  ">
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
                          <a href="#/" onClick={() => addToCart(pro, pro._id)}>
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
      
      <Offcanvas show={shows} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filtrele</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="col">
          <div className="b">
          <FilterBrand formik={formik} />
          <FilterDetails formik={formik} />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Product;
