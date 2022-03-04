import { BiUser } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/Auth/authSlice";

function Navbars({ loggedIn, setLoggedIn }) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    setLoggedIn(false);
  };
  return (
    <>
      <nav className=" navbar navbar-expand-md navbar-light  navcolor ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            E-Commerce
          </Link>
          <input
            className="w-50 d-flex justify-content-center ms-5 p-2   greensad"
            style={{ backgroundColor: "#f3f3f3", borderRadius: "5px" }}
            placeholder="Aradığınız ürün veya markayı yazınız"
            type="text"
          />

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto  mb-md-0"></ul>

            <div className="d-flex  mt-2 mt-md-0">
              {!loggedIn && (
                <>
                  <Link to="/singin" className="nav-color my-2 my-sm-0 mx-2 ">
                    <BiUser size={17} />
                    <small className=""> Giriş Yap </small>
                  </Link>
                  <Link to="/register" className="nav-color my-2 my-sm-0 mx-2">
                    <FiUserPlus size={17} />
                    <small> Kayıt Ol </small>
                  </Link>
                </>
              )}
              {loggedIn && (
                <>
                  <a
                    href="#/"
                    className="nav-color my-2 my-sm-0 mx-2 "
                    onClick={() => handleLogout()}
                  >
                    <BiUser size={17} />
                    <small className=""> Çıkış Yap </small>
                  </a>
                  <Link to="/profile" className="nav-color my-2 my-sm-0 mx-2 ">
                    <BiUser size={17} />
                    <small className=""> Profil </small>
                  </Link>
                </>
              )}

              <Link to="/cart" className="nav-color my-2 my-sm-0 mx-2">
                <AiOutlineShoppingCart size={17} />
                <small> Sepetim </small>{" "}
                <span className="badge bg-success">2</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbars;
