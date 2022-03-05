import React from "react";
import "./category.css";
import {
  
  
  Link
  
  
} from "react-router-dom";
function Category() {
  
  return (
    <>
      <ul className=" border-bottom ">
        <div className="container">
          <li>
            <Link to="/ayakkabı" className="hov">
              Ayakkabı
            </Link>
        
          </li>
          <li>
            <Link to="/pantolon" className="hov">
              Pantolon
            </Link>
        
          </li>
          <li>
            <Link to="/tshirt" className="hov">
              T-Shirt
            </Link>
        
          </li>
          <li>
            <Link to="/telefon" className="hov">
            Telefon
            </Link>
        
          </li>
          <li>
            <Link to="/laptop" className="hov">
            Laptop
            </Link>
        
          </li>
          <li>
            <Link to="/televizyon" className="hov">
            Televizyon
            </Link>
        
          </li>
      
        </div>
      </ul>
    </>
  );
}

export default Category;
