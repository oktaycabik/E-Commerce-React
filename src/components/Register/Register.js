import React from "react";
import "./singin.css";
import { useState,  } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/Auth/authSlice";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();
  const handleRegister = async (e) => {
    dispatch(register({ name, email, password }));

    e.preventDefault();
  };
  return (
    <>
      <main className="form-signin">
        <form onSubmit={handleRegister} type="submit">
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
          <div className="form-floating">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="form-control"
              id="floatingName"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-success" type="submit">
            Kayıt ol
          </button>
        </form>
      </main>
    </>
  );
}

export default Register;
