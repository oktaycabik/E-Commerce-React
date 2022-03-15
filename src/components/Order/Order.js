import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getProfileById } from "../../redux/Auth/authSlice";
import { newOrder } from "../../redux/Products/productSlice";

import "./order.css"
function Order() {

  const [carts, setCarts] = useState([]);
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();
  useEffect(() => {
 
    setCarts(JSON.parse(localStorage.getItem("product")));
    dispatch(getProfileById());
  }, [dispatch]);

  const mapOrder=carts.map(a=>a.product._id)
  const buyOrder = () => {
    console.log("product", mapOrder);
    dispatch(newOrder({ product: mapOrder}));
  };
  const cartTotalPrice = () => {
    let total = 0;
    for (var i = 0; i < carts.length; i++) {
      const a =carts[i].product?.price *carts[i].quantity
      total += Number(a);
     
    }
     
    return total;
  };
  
  return (
    <>
      <div className="row">
        <div className="col-md-8 card shadowRer p-3 ">
          <div className="row d-flex justify-content-center">
            <div className="col-md-5 ">
              <div  className="card p-2 shadowRer">
                <div  className=" card card-title primary-color p-1"><b>Adres Bilgileri</b> </div>
           
                <div className="card-text mb-1 txs-14">{profile?.adress?.country}</div>
                <div className="card-text mb-1 txs-14">{profile?.adress?.city}</div>
                <div className="card-text mb-1 txs-14">{profile?.adress?.district}</div>
                <div className="card-text mb-1 txs-14">{profile?.adress?.details}</div>
              </div>
            </div>

            <div className="col-md-5">
              <div   className="card p-2 shadowRer" >
                <div  className=" card primary-color card-title p-1"><b>Kullanıcı Bilgileri</b> </div>
                <div className="card-text mb-1 txs-14">{profile?.name}</div>
                <div className="card-text mb-1 txs-14">{profile?.phone_number}</div>
                <div className="card-text mb-1 txs-14">{profile?.email}</div>
                <div className="card-text mb-1 txs-14">{profile?.gender}</div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-3 p-3 shadowRer ms-4">
         
          <div   className="shadowRer p-2 ">
                <div  className="card primary-color card-title  p-1"><b>Sipariş Özeti</b> </div>
                <div className="d-flex flex-row mb-2 txs-14 justify-content-between">
                <div className="">Ürün Fiyatı:</div>
                <div className="">{cartTotalPrice()} TL</div>
                </div>
                <div className="d-flex flex-row txs-14 justify-content-between">
                <div className="">Kargo Ücreti:</div>
                <div className="">10 TL</div>
                </div>
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
