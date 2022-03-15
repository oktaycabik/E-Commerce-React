/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  decQuantity,
  incQuantity,
  remevoCart,
  setCart,
} from "../../redux/Cart/cartSlice";
import { BsTrash } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Cart() {
  const cart = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  useEffect(() => {
    const product = localStorage.getItem("product");
    dispatch(setCart(JSON.parse(product)));
  }, [dispatch]);
  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(cart));
  }, [cart]);
  const cartTotalPrice = () => {
    let total = 0;
    for (var i = 0; i < cart.length; i++) {
      const a = cart[i].product?.price * cart[i].quantity;
      total += Number(a);
    }

    return total;
  };
  const deleteCartItem = (id) => {
    dispatch(remevoCart(id));
  };
  const truncateString = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)}...`;
  };
  console.log("carts", cart);
  return (
    <>
      {!cart[0] && (
        <>
          <div className="card mt-5 p-5 shadowRer flex-row icon-border">
            <div className="">
              <AiOutlineShoppingCart
                color="green"
                size={50}
                className="mt-1 me-2 "
              />
            </div>

            <h5 className="mt-3 ms-3 text-dark">
              <b>Sepetinizde Ürün Bulunmamaktadır. </b>
            </h5>
          </div>
        </>
      )}

      {cart[0] && (
        <div className="row">
          <div className="col-md-9">
            {cart?.map((cart, key) => (
              <div>
                <div className="card p-2 mb-3 txs-14 ">
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="d-flex flex-row align-items-center ">
                      <div className="card">
                        <img
                          className=" cart-image"
                          src={cart.product.product_image}
                          alt=""
                        />
                      </div>
                      <div className="">
                        <div className="card-text ms-3">{truncateString(cart.product.name,50)}</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex flex-row align-items-center ">
                        <div className="col ">
                          <div className="d-flex justify-content-end">

                         
                        <div
                          onClick={() =>
                            dispatch(incQuantity(cart.product._id))
                          }
                          style={{ width: "30px", height: "30px" }}
                          className="btn count-btn  justify-content-center align-items-center  d-flex"
                        >
                          +
                        </div>
                        <div
                          style={{ width: "45px", height: "30px" }}
                          className="justify-content-center align-items-center count d-flex"
                        >
                          {" "}
                          {cart?.quantity}
                        </div>
                        <div
                          onClick={() =>
                            dispatch(decQuantity(cart.product._id))
                          }
                          style={{ width: "30px", height: "30px" }}
                          className="btn count-btn  justify-content-center align-items-center  d-flex"
                        >
                          -
                        </div>
                        </div>
                    
                        </div>
                        <div className="col">
                        
                          <div className="card-text justify-content-end d-flex text-success">{cart?.product?.price}TL</div>
                         
                        </div>
                        <div className="col">
                          <div className="card-text justify-content-end d-flex me-3">
                            <a
                              onClick={() => deleteCartItem(cart?.product?._id)}
                              className="icon-color ms-4"
                              type="button"
                            >
                              <BsTrash size={16}/>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            ))}
          </div>

          <div className="  col-md-3">
            <div className="card shadowRer p-3 tx-15">
              <button
                style={{ backgroundColor: "#028200" }}
                className="btn clr-primary  mb-4 "
              >
                Sepeti Onayla
              </button>

              <div className="card p-3 shadowRer">
                <h5 className="card-title text-dark">Sipariş Özeti</h5>
                <div className=" d-flex flex-row justify-content-between mb-1">
                  <div className="card-text txs-14">Ürünün Toplamı</div>
                  <div className=" card-text  justify-content-center">
                    <strong className="text-success ">
                      {cartTotalPrice()} TL
                    </strong>
                  </div>
                </div>
                <div className=" d-flex flex-row justify-content-between mb-1">
                  <div className=" card-text txs-14">Kargo Ücreti</div>
                  <div className=" card-text">
                    <strong>0 TL</strong>
                  </div>
                </div>
                <div className=" d-flex flex-row justify-content-between mb-1">
                  <div className="card-text txs-14">İndirim</div>
                  <div className="card-text ">
                    <strong>0 TL</strong>
                  </div>
                </div>
              </div>
              <Link to="/order" className="btn clr-primary clr-primaryh mt-4">
                Sepeti Onayla
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
