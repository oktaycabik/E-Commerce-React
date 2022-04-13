import Navbars from "./components/Navbar/Navbars";

import { useState, useEffect } from "react";

import { Container, Row } from "reactstrap";
import Product from "./components/product/Product";
import { BrowserRouter as Router, Switch, Route,    } from "react-router-dom";
import SingIn from "./components/SingIn/SingIn";
import Profile from "./components/Profile/Profile";
import Cart from "./components/Cart/Cart";
import Register from "./components/Register/Register";
import ProductDetails from "./components/product/ProductDetails/ProductDetails";
import Footer from "./components/Footer/Footer";
import Category from "./components/Category/Category";
import Home from "./components/Home/Home";
import Order from "./components/Order/Order";


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  
  


  useEffect(() => {
    const tokens1 = localStorage.getItem("access_token");

    if (tokens1) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);
  
  
 
 
  return (
    <>
      <Router>
     
        <Row>
          <Navbars loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
         
        </Row>
        <Row>
          
       
        </Row>
      
        <Container className="">
          <Row>
            
              <Switch>
               
                <Route path="/profile">
                  <Profile setLoggedIn={setLoggedIn} />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/cart">
                  <Cart loggedIn={loggedIn} />
                </Route>
                <Route path="/order" ><Order/></Route>

                <Route path="/singin">
                  <SingIn
                    
                    setLoggedIn={setLoggedIn}
                 
                  />
                </Route>
                <Route path="/product/:id">
                  <ProductDetails />
                </Route>
               
               
                <Route path="/:id">
                  <Product loggedIn={loggedIn}/>
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
