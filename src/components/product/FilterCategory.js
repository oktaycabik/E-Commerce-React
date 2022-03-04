import React from 'react'
import { Accordion } from "react-bootstrap";
import "./product.css"
function FilterCategory({formik}) {
  const data=["Laptop","Ayakkabı","Televizyon","Tshirt","Pantolon","Telefon"]
  return (
    
    <div>
   <Accordion defaultActiveKey="0">
            <Accordion.Item className="tolga" eventKey="0">
              <Accordion.Header ><small><b>Kategori</b></small> </Accordion.Header>
              <Accordion.Body> 
                {
                  data.map((cat,key)=>(
                    <div key={key} className="flex-row ">
                    <input 
                      className='form-check-input '
                      type="checkbox"
                      value={cat}
                      id={cat}
                      name="category"
                      onChange={formik.handleChange}
                    />
                    <label className="ms-1" htmlFor={cat}>
                    <small> {cat}  </small>
                    </label>
                  </div>

                  ))
                }
              

              
              
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
    </div>
  )
}

export default FilterCategory