import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom"
import { getProfileById } from "../../../redux/Auth/authSlice";

function MyFavorities() {
  const user = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");
  useEffect(() => {
    dispatch(getProfileById(userId));
  }, [dispatch, userId]);
  const truncateString = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)}...`;
  };
  return (
    <div>
      <div className="card shadowRer ">
        <div className=" p-3 cards card-text profile-title">Favorilerim</div>
      </div>
      <div className="row">
        {user?.favorites?.map((pro, key) => (
          <div key={pro._id} className="col-md-3 col-sm-4 col-6 mt-3 ">
          <div className="product-grid  a">
            <div className="product-image border-bottom">
       
             
             
              
                <img
                  alt=""
                  className="img-1 h-75 "
                  src={`/${pro?.product_image}`}
                />
             
             
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
    </div>
  );
}

export default MyFavorities;
