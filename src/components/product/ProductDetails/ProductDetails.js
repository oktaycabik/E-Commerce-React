import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import { getProduct } from "../../../redux/Products/productSlice";
import { BsSuitHeart } from "react-icons/bs";
import { inraceQuantity,addCart} from "../../../redux/Cart/cartSlice";

function ProductDetails() {
  const product = useSelector((state) => state.item.productDetails);
  const cart = useSelector((state) => state.cart.items);
 
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
    localStorage.setItem("product",JSON.stringify(cart))
  }, [dispatch, id,cart]);
  
  const addToCart=()=>{
    const copyCart = cart.findIndex(
      (pro) => pro.product._id === product._id
    );
    console.log("copyCart", copyCart);
    if (copyCart > -1) {
      dispatch(inraceQuantity(copyCart));
    } else if (copyCart === -1) {
      dispatch(addCart({ product: product, quantity: 1 }));

    }
  }
  console.log('cart', cart)
  
  return (
    <>
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <div className="card">
              <div className="row">
                <div className="col-md-5 p-3">
                  <div className="card ">
                    <img
                      className="card-img "
                      src={`/${product?.product_image}`}
                      alt="produuct"
                    />
                  </div>
                </div>
                <div className="col-md-7 p-3">
                  <div className="card-title fs-5">
                    <b>{product.brand}</b> {product.name}
                  </div>
                  <div className="card-text text-success">
                    <h4>
                      <b>{product.price}TL</b>
                    </h4>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-10">
                      <div onClick={()=>addToCart()} className="btn btn-success w-100 p-2">
                        Sepete Ekle
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="div">
                        <button className="card d-flex align-items-center p-2 ">
                          <BsSuitHeart color="green" size={27} className="" />
                        </button>
                      </div>
                    </div>
                    <div className="border-top border-bottom mt-3">
                      <div className="mt-2">
                        <div className="card-title">
                          <b>Ürünün Özellikleri</b>
                        </div>
                        <div className="card-text">
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </>
  );
}

export default ProductDetails;
