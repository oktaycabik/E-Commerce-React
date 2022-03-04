import React from "react";

import { Accordion } from "react-bootstrap";
import { useParams } from "react-router-dom";
function FilterDetails({ formik }) {
  const { id } = useParams();
  const shoes = ["Günlük", "Spor", "Topuklu Ayakkabı"];
  const color = ["Siyah", "Beyaz"];
  const ram = ["4GB", "8GB", "16GB"];
  const laptop_memory=["128","256","1TB","512"]
  const core=["Intel Core i3","Intel Core i5","Intel Core i7"]
  return (
    <div>
      {id==="ayakkabı" && (
        <Accordion defaultActiveKey="0">
          <Accordion.Item className="tolga" eventKey="0">
            <Accordion.Header><small><b>Kullanım Alanı</b></small> </Accordion.Header>
            <Accordion.Body>
              {id==="ayakkabı" &&
                shoes.map((shoes,key) => (
                  <div key={key} className="flex-row ">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      value={shoes}
                      id={shoes}
                      name="kullanım"
                      onChange={formik.handleChange}
                    />
                    <label className="ms-1" htmlFor={shoes}>
                    <small>{shoes} </small>
                    </label>
                  </div>
                ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}

      <Accordion defaultActiveKey="0">
        <Accordion.Item className="tolga" eventKey="0">
          <Accordion.Header><small><b>Renk</b></small> </Accordion.Header>
          <Accordion.Body>
            {id==="ayakkabı" &&
              color.map((shoes,key) => (
                <div key={key} className="flex-row ">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    value={shoes}
                    id={shoes}
                    name="kullanım"
                    onChange={formik.handleChange}
                  />
                  <label className="ms-1" htmlFor={shoes}>
                  <small>{shoes} </small>
                  </label>
                </div>
              ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {id==="laptop" && (
        <Accordion defaultActiveKey="0">
          <Accordion.Item className="tolga" eventKey="0">
            <Accordion.Header><small><b>Ram</b></small> </Accordion.Header>
            <Accordion.Body>
              {id==="laptop" &&
                ram.map((ram,key) => (
                  <div key={key} className="flex-row ">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      value={ram}
                      id={ram}
                      name="kullanım"
                      onChange={formik.handleChange}
                    />
                    <label className="ms-1" htmlFor={ram}>
                    <small>{ram} </small>
                    </label>
                  </div>
                ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
      {id==="laptop" && (
        <Accordion defaultActiveKey="0">
          <Accordion.Item className="tolga" eventKey="0">
            <Accordion.Header><small><b>SSD Kapasitesi</b></small> </Accordion.Header>
            <Accordion.Body>
              {id==="laptop" &&
                laptop_memory.map((memory,key) => (
                  <div key={key} className="flex-row ">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      value={memory}
                      id={memory}
                      name="kullanım"
                      onChange={formik.handleChange}
                    />
                    <label className="ms-1" htmlFor={memory}>
                    <small>{memory} </small>
                    </label>
                  </div>
                ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}

{id==="laptop" && (
        <Accordion defaultActiveKey="0">
          <Accordion.Item className="tolga" eventKey="0">
            <Accordion.Header><small><b>İşlemci</b></small> </Accordion.Header>
            <Accordion.Body>
              {id==="laptop" &&
                core.map((core,key) => (
                  <div key={key} className="flex-row ">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      value={core}
                      id={core}
                      name="kullanım"
                      onChange={formik.handleChange}
                    />
                    <label className="ms-1" htmlFor={core}>
                      <small>{core} </small>
                    </label>
                  </div>
                ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </div>
  );
}

export default FilterDetails;
