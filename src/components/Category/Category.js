import React from "react";
import "./category.css";
import {
  BrowserRouter as Router,
  useParams,
  Link,
  
  
} from "react-router-dom";
function Category() {
  
  return (
    <>
      <ul className=" border-bottom ">
        <div className="container">
          <li>
            <a className="hov" href="#">
              Giyim
            </a>
            <ul className="dropdown">
              <li>
                <Link to="/ayakkabı">Ayakkabı</Link>
              </li>
              <li>
                <Link to="tshirt">T-shirt</Link>
              </li>
              <li>
              <Link to="pantolon">Pantolon</Link>
              </li>
            </ul>
          </li>
          <li>
            <a className="hov" href="#">
              Elektronik
            </a>
            <ul className="dropdown">
              <li>
              <Link to="telefon">Telefon</Link>
              </li>
              <li>
              <Link to="laptop">Laptop</Link>
              </li>
              <li>
              <Link to="televizyon">Televizyon</Link>
              </li>
            </ul>
          </li>
          <li>
            <a className="hov" href="#">
              Kozmetik
            </a>
            <ul className="dropdown">
              <li>
                <a href="#">Saç Bakım</a>
              </li>
              <li>
                <a href="#">Cilt Bakım</a>
              </li>
              <li>
                <a href="#">Makyaj</a>
              </li>
            </ul>
          </li>
        </div>
      </ul>
    </>
  );
}

export default Category;
