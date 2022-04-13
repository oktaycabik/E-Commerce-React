import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Link,  Switch ,useRouteMatch} from "react-router-dom";
import {Row,Col} from "reactstrap"
import Myorder from "./Myorder/Myorder";
import Userinfo from "./Userinfo/Userinfo";
import MyFavorites from "./MyFavorites/MyFavorites";
import MyAddress from "./MyAddress/MyAddress";
import "./profile.css"
import { useSelector,useDispatch } from "react-redux";
import { getProfileById, logout } from "../../redux/Auth/authSlice";
import { useHistory } from "react-router-dom";
function Profile({setLoggedIn}) {
  
  let { path, url } = useRouteMatch();
  let history = useHistory();

  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    setLoggedIn(false);
    history.push("/")
  };
  useEffect(() => {
   
    dispatch(getProfileById());
  }, [dispatch]);
  
  return (
    <div>
     
      <Router>
        <Row> 
          <div className="col-sm-2 col">
      <div className="list-group ">
        <Link to={`${url}/myorder`}className="list-group-item list-group-item-action border-card " aria-current="true">
        Siparişlerim
        </Link>
        <Link to={`${url}/userinfo`} className="list-group-item list-group-item-action border-card">Kullanıcı Bilgilerim</Link>
        <Link to={`${url}/myfavorites`} className="list-group-item list-group-item-action border-card">Favorilerim</Link>
        <Link to={`${url}/myaddress`} className="list-group-item list-group-item-action border-card">Adres Bilgilerim</Link>
        <button onClick={() => handleLogout()} className="btn clr-primary btn-14">Çıkış Yap</button>
      </div>
      </div>
      <div className="col-sm-8"> 
      <Switch>
      <Route path={`${path}/myorder`}><Myorder/></Route>
      <Route path={`${path}/userinfo`}><Userinfo profile={profile}/></Route>
      <Route path={`${path}/myfavorites`}><MyFavorites/></Route>
      <Route path={`${path}/myaddress`}><MyAddress profile={profile}/></Route>
      
      </Switch>
      
      </div>
     
      </Row>
     
     
      </Router>
    </div>
  );
}

export default Profile;
