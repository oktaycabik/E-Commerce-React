import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Link,  Switch ,useRouteMatch} from "react-router-dom";
import {Row,Col} from "reactstrap"
import Myorder from "./Myorder/Myorder";
import Userinfo from "./Userinfo/Userinfo";
import MyFavorites from "./MyFavorites/MyFavorites";
import MyAddress from "./MyAddress/MyAddress";
import "./profile.css"
import { useSelector,useDispatch } from "react-redux";
import { getProfileById } from "../../redux/Auth/authSlice";

function Profile() {
  
  let { path, url } = useRouteMatch();
  
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();
  useEffect(() => {
   
    dispatch(getProfileById());
  }, [dispatch]);
  
  return (
    <div>
     
      <Router>
        <Row> 
          <Col xs="2">
      <div className="list-group ">
        <Link to={`${url}/myorder`}className="list-group-item list-group-item-action border-card " aria-current="true">
        Siparişlerim
        </Link>
        <Link to={`${url}/userinfo`} className="list-group-item list-group-item-action border-card">Kullanıcı Bilgilerim</Link>
        <Link to={`${url}/myfavorites`} className="list-group-item list-group-item-action border-card">Favorilerim</Link>
        <Link to={`${url}/myaddress`} className="list-group-item list-group-item-action border-card">Adres Bilgilerim</Link>

      </div>
      </Col>
      <Col xs="10"> 
      <Switch>
      <Route path={`${path}/myorder`}><Myorder/></Route>
      <Route path={`${path}/userinfo`}><Userinfo profile={profile}/></Route>
      <Route path={`${path}/myfavorites`}><MyFavorites/></Route>
      <Route path={`${path}/myaddress`}><MyAddress profile={profile}/></Route>
      </Switch>
      </Col>
     
      </Row>
     
     
      </Router>
    </div>
  );
}

export default Profile;
