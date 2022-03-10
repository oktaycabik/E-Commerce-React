import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { newOrder } from "../../redux/Products/productSlice";
import "./order.css"
function Order() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("product_id")));
  }, []);

  const dispatch = useDispatch();
  const buyOrder = () => {
    console.log("product", cart);
    dispatch(newOrder({ product: cart }));
  };
  return (
    <>
      <div className="row">
        <div className="col-md-8 card shadowRer p-3 ">
          <div className="row d-flex justify-content-center">
            <div className="col-md-5 ">
              <div  className="card p-2 shadowRer">
                <div style={{color:"white"}} className="clr-primary card card-title  p-1">Adres Bilgileri</div>
                <div className="card-text">abc</div>
                <div className="card-text">abc</div>
                <div className="card-text">abc</div>
              </div>
            </div>

            <div className="col-md-5">
              <div   className="card p-2 shadowRer" >
                <div style={{backgroundColor:"green",color:"white"}} className="clr-primary card card-title p-1">Kullanıcı Bilgileri</div>
                <div className="card-text">abc</div>
                <div className="card-text">abc</div>
                <div className="card-text">abc</div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-3 p-3 shadowRer ms-4">
         
          <div  style={{borderColor:"green"}}   className="shadowRer p-2 ">
                <div style={{backgroundColor:"green",color:"white"}} className="card  card-title clr-primary p-1">Sipariş Bilgileri</div>
                <div className="card-text">abc</div>
                <div className="card-text">abc</div>
                <div className="card-text">abc</div>
              </div>
              <button style={{color:"white"}}  onClick={buyOrder} className="w-100 btn clr-primary mt-4 clr-primaryh">
              Satın Al
            </button>
         
          
        </div>
      </div>
    </>
  );
}

export default Order;
