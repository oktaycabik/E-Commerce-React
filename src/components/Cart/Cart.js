import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

function Cart() {
 
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("product")));
  }, []);
  const cartTotalPrice = () => {
    let total = 0;
    for (var i = 0; i < cart.length; i++) {
      const a =cart[i].product?.price
      total += Number(a);
     
    }
     
    return total;
  };
  return (
    <>
    
      <div className="d-flex mt-5 row">
       
     
        <div className="col-md-9">
          {cart?.map((cart, key) => (
            <div key={key} className="row p-2 mb-2 shadowRer bg-white border rounded  ">
              <div className="col-md-3 mt-1">
                <img
                  alt="ssd"
                  className="img-fluid img-responsive rounded product-image w-50"
                  src={`/${cart?.product.product_image}`}
                />
              </div>
              <div className="col-md-6 mt-1">
                <h6>{cart?.product?.name}</h6>

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
                    className="btn clr-primary clr-primaryh btn-sm mt-2"
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
          <div className="card shadowRer p-3 ">
            <button
              style={{ backgroundColor: "#028200" }}
              className="btn clr-primary clr-primaryh mb-4 "
            >
              Sepeti Onayla
            </button>
            <div className="card p-2 shadowRer">
              <div className="card-title">Sipariş Özeti</div>
              <div className=" d-flex flex-row justify-content-between">
                <div className="card-text ">Ürünün Toplamı</div>
                <div className=" card-text  justify-content-center">
                  <strong className="text-success">
                    {cartTotalPrice()} TL
                  </strong>
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
            <Link to="/order" className="btn clr-primary clr-primaryh mt-4">Sepeti Onayla</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
