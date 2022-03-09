import React from "react";

function MyAddress({profile}) {
  
  return (
    <>
      <div className="card ">
        <div className=" p-3 cards card-text">Adres Bilgilerim</div>
      </div>
      <div className="card mt-2 p-3 col-md-4">
        <div className="border-top border-bottom p-1">
          <div className="card-title"> <b><small>{profile?.adress?.title}</small></b> </div>
          </div>
          <div className="card-title"> <b><small>{profile?.name}</small></b> </div>
          <div className="card-text"><small>{profile?.adress?.country}</small></div>
          <div className="card-text"><small>{profile?.adress?.city}</small></div>
          <div className="card-text"><small>{profile?.adress?.district}</small></div>
          <div className="card-text"><small>{profile?.adress?.details}</small></div>
        </div>
    </>
  );
}

export default MyAddress;
