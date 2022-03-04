import React from "react";
import "./singin.css";


function SingIn({setEmail,email,password,setPassword,handleLogin}) {
   

  return (
    <>
      <main className="form-signin">
        <form  onSubmit={handleLogin} type="submit">
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input
            onChange={(e)=>setEmail(e.target.value)}
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
            onChange={(e)=>setPassword(e.target.value)}
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
          <button
           
            className="w-100 btn btn-lg btn-success"
            type="submit"
          >
            Giriş Yap
          </button>
        </form>
      </main>
    </>
  );
}

export default SingIn;
