import React, { useState } from 'react';
import "./map.css";
import MapComponent from '../components/MapComponent';

const Map = () => {
  const [selectedMenu, setSelectedMenu] = useState('pemadaman'); // Default selected menu
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (<div className="p-3 m-4 background-map">
    <MapComponent selectedMenu={selectedMenu}/>
    <div className="kategori">
      <h3 className="ms-3 text-white">Kategori :</h3>
      <div className='d-flex ms-3 gap-3'>
        <div className={`kategori-menu ${selectedMenu === 'pemadaman' ? 'menu-active' : ''} d-flex justify-content-center align-items-center`}
          onClick={() => handleMenuClick('pemadaman')}>
          <p className='m-0 content-menu text-center'>Pemadaman <br /> Listrik</p>
        </div>
        <div className={`kategori-menu ${selectedMenu === 'cabang' ? 'menu-active' : ''} d-flex justify-content-center align-items-center`}
          onClick={() => handleMenuClick('cabang')}>
          <p className='m-0 content-menu text-center'>Cabang <br /> PLN</p>
        </div>
        <div className={`kategori-menu ${selectedMenu === 'area' ? 'menu-active' : ''} d-flex justify-content-center align-items-center`}
          onClick={() => handleMenuClick('area')}>
          <p className='m-0 content-menu text-center'>Area Boros <br /> Listrik</p>
        </div>
        <div className={`kategori-menu ${selectedMenu === 'pembangkit' ? 'menu-active' : ''} d-flex justify-content-center align-items-center`}
          onClick={() => handleMenuClick('pembangkit')}>
          <p className='m-0 content-menu text-center'>Pembangkit <br /> Listrik</p>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Map;