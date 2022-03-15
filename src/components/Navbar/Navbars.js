import { BiUser } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Auth/authSlice";


function Navbars({ loggedIn, setLoggedIn }) {
  const cart = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    setLoggedIn(false);
  };
  return (
    <>
      <nav className=" navbar navbar-expand-md navbar-light tx-14 navcolor  ">
        <div className="container ">
          <Link className="navbar-brand" to="/">
           <h2>E-QKA TİCARET</h2> 
          </Link>
          <input
            className="w-50  ms-5 p-2   greensad"
            style={{ backgroundColor: "#f3f3f3", borderRadius: "5px" }}
            placeholder="Aradığınız ürün veya markayı yazınız"
            type="text"
          />

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto  mb-md-0"></ul>

            <div className="d-flex  mt-2 mt-md-0">
              {!loggedIn && (
                <>
                  <Link to="/singin" className="nav-color my-2 my-sm-0 mx-3 ">
                    <BiUser className="mb-1" size={18} />
                    <span className="tx-13"> Giriş Yap </span>
                  </Link>
                  <Link to="/register" className="nav-color my-2 my-sm-0 mx-3">
                    <FiUserPlus className="mb-1" size={18} />
                    <span className="tx-13"> Kayıt Ol </span>
                  </Link>
                </>
              )}
              {loggedIn && (
                <>
                  <a
                    href="#/"
                    className="nav-color my-2 my-sm-0 mx-3 "
                    onClick={() => handleLogout()}
                  >
                    <BiUser className="mb-1" size={18} />
                    <span className="tx-13"> Çıkış Yap </span>
                  </a>
                  <Link to="/profile/myorder" className="nav-color my-2 my-sm-0 mx-3 ">
                    <BiUser className="mb-1" size={18} />
                    <span className="tx-13"> Profil </span>
                  </Link>
                </>
              )}

              <Link to="/cart" className="nav-color my-2 my-sm-0 mx-2">
                <AiOutlineShoppingCart className="mb-1" size={18} />
                <span className="tx-13"> Sepetim </span>{" "}
                <span className="badge primary-bgcolor">{cart.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbars;
