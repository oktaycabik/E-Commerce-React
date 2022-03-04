import Navbars from "./components/Navbar/Navbars";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { login } from "./redux/Auth/authSlice";
import { Container, Row } from "reactstrap";
import Product from "./components/product/Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingIn from "./components/SingIn/SingIn";
import Profile from "./components/Profile/Profile";
import Cart from "./components/Cart/Cart";
import Register from "./components/Register/Register";
import ProductDetails from "./components/product/ProductDetails/ProductDetails";
import Footer from "./components/Footer/Footer";
import Category from "./components/Category/Category";
import Home from "./components/Home/Home";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const tokens1 = localStorage.getItem("access_token");

    if (tokens1) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleLogin = async (e) => {
    dispatch(login({ email, password }));

    setLoggedIn(true);

    e.preventDefault();
  };
  return (
    <>
      <Router>
        <Row>
          <Navbars loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
         
        </Row>
        <Row>
          
          <Category/>
        </Row>
            
        <Container className="pe-5 ps-5">
          <Row>
            
              <Switch>
               
                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/cart">
                  <Cart />
                </Route>

                <Route path="/singin">
                  <SingIn
                    handleLogin={handleLogin}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                  />
                </Route>
                <Route path="/product/:id">
                  <ProductDetails />
                </Route>
               
               
                <Route path="/:id">
                  <Product />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
           
          </Row>
          <Footer/>
        </Container>
      </Router>
    </>
  );
}

export default App;
