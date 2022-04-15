import React from "react";
import "./singin.css";
import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getAllUsers, register } from "../../redux/Auth/authSlice";
import { useHistory } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [istrue, setistrue] = useState(true)
  const allUsers = useSelector((state) => state.user.fullUsers);
  let history=useHistory()
  const dispatch = useDispatch();
     const findUser=allUsers.find(a=>a.email===email)
   const passLength=password.length>=6
  const handleRegister = async (e) => {

   
  e.preventDefault();
   if(!findUser && passLength===true){
    dispatch(register({ name, email, password }));
    setistrue(true)
    history.push("singin")
  
   }
 
   setistrue(false)
  };
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch])
  return (
    <>
      <main className="form-signin col-md-4">
        {
          istrue===false &&(
            <div className="bg-danger text-light rounded mb-2 p-2 ">Bu Email'e sahip bir kullanıcı var!</div>
          )
        }
          {
          passLength===false &&(
            <div className="bg-danger text-light rounded p-2 ">Şifreniz En az 6 Karakterli olmalı!</div>
          )
        }
        <form onSubmit={handleRegister} type="submit">
          <h1 className="h3 mb-3 mt-2 fw-normal">Kayıt Olun</h1>
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
            
          </div>
          <button className="w-100 btn btn-lg clr-primary" type="submit">
            Kayıt ol
          </button>
        </form>
      </main>
    </>
  );
}

export default Register;
