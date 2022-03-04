import React from "react";
import "./myorder.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserOrder } from "../../../redux/Auth/authSlice";
function Myorder() {
  const order = useSelector((state) => state.user.order);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(getUserOrder(id));
  }, [dispatch]);
  
  return (
    <>
      <div className="card ">
        <div className=" p-3 cards card-text">Siparişlerim</div>
      </div>
      {
        order.map(order=>(
          <div key={order._id} className="card mt-3">
          <div
            style={{ backgroundColor: "#faf9f9" }}
            className=" d-flex flex-row justify-content-between  "
          >
            <div className=" p-3 d-flex flex-column justify-content-between card-body">
              <div className="card-text">
                {" "}
                <strong>Sipariş Tarihi</strong>
              </div>
              <div className="card-text">15.05.2022</div>
            </div>
            <div className=" p-3 d-flex flex-column justify-content-between card-body">
              <div className="card-text">
                <strong>Alıcı</strong>
              </div>
              <div className="card-text">{order.user.name}</div>
            </div>
            <div className=" p-3 d-flex flex-column justify-content-between card-body">
              <div className="card-text">
                <strong>Tutar</strong>
              </div>
              <div className="card-text">{order.product.map(pro=>pro.price)}</div>
            </div>
            <div className=" p-3 d-flex flex-column justify-content-between card-body">
              <button className="btn btn-success">Sipariş Detayı</button>
            </div>
          </div>
          <div className="border-top p-3">
            <div className="card p-3 d-flex flex-row justify-content-around ">
              <div className=" p-3 d-flex flex-column justify-content-between card-body">
                <div className="card-text">Sipariş Durumu</div>
              </div>
              <div className=" p-3 d-flex flex-column justify-content-between card-body">
                <div className="card-image">{order.product.map(pro=>pro.name)}</div>
              </div>
            </div>
          </div>
        </div>
        ))
      }
   
    </>
  );
}

export default Myorder;
