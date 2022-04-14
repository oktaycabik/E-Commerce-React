import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className="row">
      <div className="col-lg-4 col-12">
        <div className=" mb-3">
          <Link to="/televizyon"> 
         
          <img src="https://cdn.dsmcdn.com/ty345/pimWidgetApi/mobile_20220303063423_2210837ElektronikMobile202203.jpg" className='card-img' alt="" />
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className="">
          <Link to="/telefon">
   
          <img src="https://cdn.dsmcdn.com/ty389/pimWidgetApi/mobile_20220408185655_mobilenisan.jpg" className='card-img' alt="" />
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className="">
          <Link to="laptop">
          
          <img src="https://cdn.dsmcdn.com/ty380/pimWidgetApi/mobile_20220401145004_Subatm1.jpg" className='card-img' alt="" />
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className="">
          <Link to="/pantolon"> 
          <img src="https://cdn.dsmcdn.com/ty398/pimWidgetApi/mobile_20220413130658_2216108KadinMobile202204131602.jpg" className='card-img' alt="" />
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className="">
          <Link to="tshirt"> 
          <img src="https://cdn.dsmcdn.com/ty385/pimWidgetApi/mobile_20220406122100_123456ErkekMobile202204061401.jpg" className='card-img' alt="" />
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <div className="">
        <Link to="ayakkabı">
       
          <img src="https://cdn.dsmcdn.com/ty371/pimWidgetApi/mobile_20220322120345_2205034KadinMobile202202211601.jpg" className='card-img' alt="" />
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home