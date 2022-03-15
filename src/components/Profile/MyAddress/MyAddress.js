import React from "react";

function MyAddress({profile}) {
  
  return (
    <>
      <div className="card shadowRer">
        <div className=" p-3 cards profile-title card-text">Adres Bilgilerim</div>
      </div>
      <div className="card mt-2 p-3 col-md-4 shadowRer">
        <div className="border-top border-bottom p-1">
          <div className="card-title mb-1 primary-color"> <b><small>{profile?.adress?.title}</small></b> </div>
          </div>
          <div className="card-title mb-1"> <><small>{profile?.name}</small></> </div>
          <div className="card-text mb-1"><small>{profile?.adress?.country}</small></div>
          <div className="card-text mb-1"><small>{profile?.adress?.city}</small></div>
          <div className="card-text mb-1"><small>{profile?.adress?.district}</small></div>
          <div className="card-text mb-1"><small>{profile?.adress?.details}</small></div>
        </div>
    </>
  );
}

export default MyAddress;
