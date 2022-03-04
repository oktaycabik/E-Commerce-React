import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfileById } from "../../../redux/Auth/authSlice";
function Userinfo() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(getProfileById(id));
  }, [dispatch]);
  console.log('profile', profile)
  return (
    <div>
      <div className="card  ">
          <div className=" p-3 cards card-text">Kullanıcı Bilgileri</div>
        </div>
    </div>
  )
}

export default Userinfo