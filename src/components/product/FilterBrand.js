import React from "react";
import { Accordion } from "react-bootstrap";
import { Link,useParams } from "react-router-dom";
function FilterBrand({ formik }) {
  const { id } = useParams();
  
  const shoes = ["Muggo", "StWenn ", "Dexter", "Pull & Bear", "HUMMEL"];
  const laptop = ["Hp", "Lenovo ", "Msi"];
  const tel = ["Apple", "Samsung", "Oppo"];
  const television = ["Onvo ", "Samsung", "Vestel"];
  const jean = ["BİKELİFE ", "TRENDYOLMİLLA ", "Avva", "Koton"];
  const tshirt=["Pasage","Mavi","Twentyone"]
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item className="tolga" eventKey="0">
          <Accordion.Header > <small><b>Marka</b></small> </Accordion.Header>
          <Accordion.Body>
            {id==="ayakkabı" &&
              shoes.map((brand,key) => (
                <div key={key} className="flex-row list-filter">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={brand}
                    id={brand}
                    name="brand"
                    onChange={formik.handleChange}
                  />
                  <label className="ms-1 form-check-label" htmlFor={brand}>
                   <small> {brand} </small>
                  </label>
                </div>
              ))}
            { id==="laptop" &&  
              laptop.map((lap,key) => (
                <div key={key} className="flex-row list-filter">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={lap}
                    id={lap}
                    name="brand"
                    onChange={formik.handleChange}
                  />
                  <label className="ms-1 form-check-label" htmlFor={lap}>
                  <small> {lap} </small>
                  </label>
                </div>
              ))}
            {id==="telefon" &&
              tel.map((tel,key) => (
                <div key={key} className="flex-row list-filter">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={tel}
                    id={tel}
                    name="brand"
                    onChange={formik.handleChange}
                  />
                  <label className="ms-1 form-check-label" htmlFor={tel}>
                  <small> {tel} </small>
                  </label>
                </div>
              ))}
            {id==="televizyon" &&
              television.map((tel,key) => (
                <div key={key} className="flex-row list-filter">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={tel}
                    id={tel}
                    name="brand"
                    onChange={formik.handleChange}
                  />
                  <label className="ms-1 form-check-label" htmlFor={tel}>
                  <small> {tel} </small>
                  </label>
                </div>
              ))}
            {id==="pantolon" &&
              jean.map((jean,key) => (
                <div key={key} className="flex-row list-filter">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={jean}
                    id={jean}
                    name="brand"
                    onChange={formik.handleChange}
                  />
                  <label className="ms-1 form-check-label" htmlFor={jean}>
                  <small> {jean} </small>
                  </label>
                </div>
              ))}
                {id==="tshirt" &&
              tshirt.map((jean,key) => (
                <div key={key} className="flex-row list-filter">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={jean}
                    id={jean}
                    name="brand"
                    onChange={formik.handleChange}
                  />
                  <label className="ms-1 form-check-label" htmlFor={jean}>
                  <small> {jean} </small>
                  </label>
                </div>
              ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FilterBrand;
