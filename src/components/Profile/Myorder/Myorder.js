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

//  const total=()=>{
//   let tol=0;
//    for(var i=0;i<order.length;i++){
//      for(var j=0;j<order[i].product.length;j++){
      
//        console.log('order[i].product[j].price', order[i].product[j].price)
//        const a=order[i].product[j].price
//        tol+=Number(a)
//      }
//    }
//    return tol
//  }
  
//  total()

console.log(order)
  return (
    <>
      <div className="card shadowRer">
        <div className=" p-3 cards profile-title card-text">Siparişlerim</div>
      </div>
      {order.map((order) => (
        <div key={order._id} className="card mt-3 txs-14">
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
              <div className="card-text">
               
                  <div className="card-text">{order.product.map(a=>(
                        <div>{a.price}</div>)
                  
                   
                  )}</div>
              
              </div>
            </div>
            <div className=" p-3 d-flex flex-column justify-content-between card-body">
              <button className="w-75 btn clr-primary ">Sipariş Detayı</button>
            </div>
          </div>
          <div className="border-top p-3">
            <div className="card p-3 d-flex flex-row justify-content-around ">
              <div className=" p-3 d-flex flex-column justify-content-between card-body">
                <div className="card-text">Sipariş Durumu</div>
              </div>
              <div className=" p-3 d-flex flex-column justify-content-between card-body">
                <div className="card-image">
                   {order.product.map((pro) =>(
                     <ul><li>{pro.name}</li></ul>
                   ))}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Myorder;
