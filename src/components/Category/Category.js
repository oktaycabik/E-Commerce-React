import React from "react";
import "./category.css";
import {
  
  
  Link
  
  
} from "react-router-dom";
function Category() {
  
  return (
    <>
      <ul className=" border-bottom txl-14">
        <div className="container">
          <li className="">
            <Link to="/ayakkabı" className=" borde">
              <b>AYAKKABI</b> 
            </Link>
        
          </li>
          <li>
            <Link to="/pantolon" className="borde">
               <b>PANTOLON</b>
            </Link>
        
          </li>
          <li>
            <Link to="/tshirt" className="borde">
            <b>T-SHİRT</b>
            </Link>
        
          </li>
          <li>
            <Link to="/telefon" className="borde">
            <b>TELEFON</b>
            </Link>
        
          </li>
          <li>
            <Link to="/laptop" className="borde">
            <b>LAPTOP</b>
            </Link>
        
          </li>
          <li>
            <Link to="/televizyon" className="borde">
            <b>TELEVİZYON</b>
            </Link>
        
          </li>
      
        </div>
      </ul>
    </>
  );
}

export default Category;
