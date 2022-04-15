import React, { useEffect,useState } from "react";
import "./singin.css";

import { useHistory } from "react-router-dom";
import { getAllUsers, login } from "../../redux/Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
function SingIn({ setLoggedIn }) {
  const allUsers = useSelector((state) => state.user.fullUsers);
  const [istrue, setistrue] = useState(true)
  let history = useHistory();
  const dispatch = useDispatch();
 
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      const findUser=allUsers.find(a=>a.email===values.email)
     if(findUser){
       setistrue(true)
      dispatch(login(values));

      setLoggedIn(true);
      history.push("/");
     }
     setistrue(false)
    },
  });
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch])
 
  return (
    <>
   
      <main className="form-signin col-md-4">
      {
      istrue===false &&(
        <span className="bg-danger text-light rounded p-2 ">Email veya şifreniz yanlış!</span>
      )
    }
        <form onSubmit={formik.handleSubmit} type="submit">
          <h1 className="h3 mb-3 fw-normal mt-2">Giriş Yapın</h1>
          <div className="form-floating">
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              type="text"
              name="email"
              className="form-control"
              id="floatingEmail"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingEmail">Email</label>
          </div>
          <div className="form-floating">
            <input
              onChange={formik.handleChange}
              value={formik.values.password}
              type="password"
              name="password"
              className="form-control"
              id="floatingName"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Password</label>
          </div>

          <button className="w-100 btn btn-lg clr-primary" type="submit">
            Giriş Yap
          </button>
        </form>
      </main>
    </>
  );
}

export default SingIn;
