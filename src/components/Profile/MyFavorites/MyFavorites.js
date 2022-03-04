import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProfileById } from "../../../redux/Auth/authSlice";

function MyFavorities() {
  const user = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");
  useEffect(() => {
    dispatch(getProfileById(userId));
  }, [dispatch, userId]);
  console.log("user", user?.favorites);
  return (
    <div>
      <div className="card  ">
        <div className=" p-3 cards card-text">Favorilerim</div>
      </div>
      <div className="row">
        {user?.favorites?.map((fav, key) => (
          <div key={key} className=" mt-3 p-3 col-md-3 ms-3">
         
            <img
              className="card-img"
              src={`/${fav?.product_image}`}
              alt=""
            />
            
              <div className="card-text "> {fav.name}</div>
              <div className="card-text text-success"> <b>{fav.price} TL</b></div>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyFavorities;
