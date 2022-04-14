import React from "react";
import "./singin.css";

import { useHistory } from "react-router-dom";
import { login } from "../../redux/Auth/authSlice";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
function SingIn({ setLoggedIn }) {
  let history = useHistory();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      dispatch(login(values));

      setLoggedIn(true);
      history.push("/");
    },
  });
  return (
    <>
      <main className="form-signin col-md-4">
        <form onSubmit={formik.handleSubmit} type="submit">
          <h1 className="h3 mb-3 fw-normal">Giriş Yapın</h1>
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
