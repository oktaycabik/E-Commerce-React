import React from "react";

import {  uptadeProfile } from "../../../redux/Auth/authSlice";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

function Userinfo({profile}) {
 
  console.log("profile", profile);
  const dispatch=useDispatch()
  const formik = useFormik({
    initialValues: {
      name:profile?.name,
      email:profile?.email,
      phone_number:profile?.phone_number,
      birth_date:profile?.birth_date,

    },

    onSubmit: async (values) => {
      dispatch(uptadeProfile(values))
    },
  });
  return (
    <div>
      <div className="card  ">
        <div className=" p-3 cards card-text">Kullanıcı Bilgileri</div>
      </div>
      <div>
        <div className=" mt-2">
          <div className="card col-md-6 p-3">
          <form onSubmit={formik.handleSubmit} type="submit">
            <label className="form-label" htmlFor="name">
               <b><>Adınız</></b>
            </label>
            <input style={{backgroundColor:"#fbfbfb"}}
              onChange={formik.handleChange}
              value={formik.values.name}
              type="text"
              name="name"
              className="form-control "
              id="name"
           
            />
             <label className="form-label  mt-2" htmlFor="email">
              E-mail
            </label>
            <input style={{backgroundColor:"#fbfbfb"}}
              onChange={formik.handleChange}
              value={formik.values.email}
              type="email"
              name="email"
              className="form-control"
              id="email"
             
            />
             <label className="form-label  mt-2" htmlFor="tel_number">
              Cep Telefonu
            </label>
            <input style={{backgroundColor:"#fbfbfb"}}
              onChange={formik.handleChange}
              value={formik.values.phone_number}
              type="text"
              name="phone_number"
              className="form-control"
              id="tel_number"
          
            />
              <label className="form-label  mt-2" htmlFor="date">
              Doğum Tarihi
            </label>
            <input style={{backgroundColor:"#fbfbfb"}}
              onChange={formik.handleChange}
              value={formik.values.birth_date}
              type="text"
              name="birth_date"
              className="form-control"
              id="date"
             
            />
             <button className="w-100 btn btn-lg btn-success  mt-3" type="submit">
            Kaydet
          </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userinfo;
