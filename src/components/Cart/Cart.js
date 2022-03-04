import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("product")));
  }, []);

  return (
    <>
      <div className="d-flex mt-5 row">
        <div className="col-md-9">
          {cart?.map((cart, key) => (
            <div key={key} className="row p-2  bg-white border rounded  ">
              <div className="col-md-3 mt-1">
                <img
                  alt="ssd"
                  className="img-fluid img-responsive rounded product-image"
                  src={`/${cart?.product.product_image}`}
                />
              </div>
              <div className="col-md-6 mt-1">
                <h5>{cart?.product?.name}</h5>

                <p className="text-justify text-truncate para mb-0">
                  {cart?.product?.description}
                  {cart?.quantity} Adet
                  <br />
                  <br />
                </p>
              </div>
              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                <div className="d-flex flex-row align-items-center">
                  <h4 className="mr-1">{cart?.product?.price} TL</h4>
                </div>
                <h6 className="text-success">Free shipping</h6>
                <div className="d-flex flex-column mt-4">
                  <button
                    style={{ backgroundColor: "#028200" }}
                    className="btn btn-success btn-sm"
                    type="button"
                  >
                    Ürün Detayı
                  </button>
                  <button
                    className="btn btn-outline-success btn-sm mt-2"
                    type="button"
                  >
                    Sepetten Kaldır
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="  col-md-3">
          <div className="card p-3 ">
            <button
              style={{ backgroundColor: "#028200" }}
              className="btn btn-success mb-4 "
            >
              Sepeti Onayla
            </button>
            <div className="card p-2">
              <div className="card-title">Sipariş Özeti</div>
              <div className=" d-flex flex-row justify-content-between">
                <div className="card-text ">Ürünün Toplamı</div>
                <div className=" card-text  justify-content-center">
                  <strong className="text-success">50TL</strong>
                </div>
              </div>
              <div className=" d-flex flex-row justify-content-between">
                <div className=" card-text ">Kargo Ücreti</div>
                <div className=" card-text">
                  <strong>20TL</strong>
                </div>
              </div>
              <div className=" d-flex flex-row justify-content-between">
                <div className="card-text ">İndirim</div>
                <div className="card-text ">
                  <strong>10TL</strong>
                </div>
              </div>
            </div>
            <button
              style={{ backgroundColor: "#028200" }}
              className="btn btn-success mt-4"
            >
              Sepeti Onayla
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
