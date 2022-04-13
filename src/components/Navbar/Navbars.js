import { BiUser } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Category from "../Category/Category";
import { IoIosSearch } from "react-icons/io";
import "./navbar.css";
import { setTitle } from "../../redux/Products/productSlice";
import {
  Navbar,
  
  Nav,
 
  Container,
} from "react-bootstrap";
function Navbars({ loggedIn, setLoggedIn }) {
  const cart = useSelector((state) => state.cart.items);
  const title = useSelector((state) => state.item.title);
  const dispatch = useDispatch();

  return (
    <div className=" ">
      <Navbar
        collapseOnSelect
        expand="md"
        bg="light"
        variant="light"
        className=" tx-14 fixed-top"
      >
        <Container>
          <Navbar.Brand href="#home"><h2>E-QKA TİCARET</h2> </Navbar.Brand>
        
         
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <div
              style={{
                backgroundColor: "#f3f3f3",
                borderRadius: "5px",
                height: 37,
              }}
              className="w-50 asa  p-2 d-flex flex-row justify-content-between align-items-center"
            >
              <input
                value={title}
                onChange={(e) => dispatch(setTitle(e.target.value))}
                className="w-100 h-100"
                style={{ backgroundColor: "#f3f3f3" }}
                placeholder="Aradığınız ürün veya markayı yazınız"
                type="text"
              />
              <IoIosSearch size={26} color="green" className="me-1" />
            </div>
            <Nav className="ms-auto">
              {!loggedIn && (
                <>
                  <Nav.Link href="#features">
                    {" "}
                    <Link to="/singin" className="nav-color my-2 my-sm-0 mx-2 ">
                      <BiUser className="mb-1" size={18} />
                      <span className="tx-13"> Giriş Yap </span>
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#pricing">
                    {" "}
                    <Link
                      to="/register"
                      className="nav-color my-2 my-sm-0 mx-2"
                    >
                      <FiUserPlus className="mb-1" size={18} />
                      <span className="tx-13"> Kayıt Ol </span>
                    </Link>
                  </Nav.Link>
                </>
              )}
              {loggedIn && (
                <>
                  <Nav.Link href="#pricing">
                    {" "}
                    <Link
                      to="/profile/myorder"
                      className="nav-color my-2 my-sm-0 mx-2 "
                    >
                      <BiUser className="mb-1" size={18} />
                      <span className="tx-13"> Hesabım </span>
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#pricing">
                    {" "}
                    <Link
                      to="/profile/myfavorites"
                      className="nav-color my-2 my-sm-0 mx-2 "
                    >
                      <BiUser className="mb-1" size={18} />
                      <span className="tx-13"> Favorilerim </span>
                    </Link>
                  </Nav.Link>
                </>
              )}
              <Nav.Link href="#pricing">
                {" "}
                <Link to="/cart" className="nav-color my-2 my-sm-0 mx-2">
                  <AiOutlineShoppingCart className="mb-1" size={18} />
                  <span className="tx-13"> Sepetim </span>{" "}
                  <span className="badge primary-bgcolor">{cart.length}</span>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Category />
      
     
     
    </div>
  );
}

export default Navbars;
