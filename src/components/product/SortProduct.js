import React from 'react'

function SortProduct({sort,setSort}) {
  return (
    <>
         <div className="d-flex row justify-content-end    ">
        <div className="d-flex col-md-10 justify-content-end  ">
          <select 
          style={{width:"150px"}}
          className='form-select  a'
            name="text"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="most-favori">En Favoriler</option>
            <option value="few-favori">En Az Favoriler</option>
            <option value="most-price">En Yüksek Fiyat</option>
            <option value="few-price">En Düşük Fiyat</option>
            <option value="most-order">Çok Satanlar</option>
            <option value="önerilen">Önerilen</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default SortProduct