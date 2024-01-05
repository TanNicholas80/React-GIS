import LogoPLN from '../images/logo_pln.png';
import Bg_Circle1 from '../images/Ellipse 1.png';
import Bg_Circle2 from '../images/Ellipse 2.png';
import "./loading.css";
import React, { useEffect, useRef, useState } from 'react';

const Loading = () => {
    const numberOfElements = 4;
    const [loadBoxElements, setLoadBoxElements] = useState([]);
    const lastAddedElementRef = useRef();

    useEffect(() => {
        const load_box = async () => {
            for (let index = 0; index < numberOfElements; index++) {
                await new Promise(resolve => setTimeout(resolve, 1000)); // Tunggu 1 detik
                // Tambahkan elemen ke dalam state hanya jika elemen terakhir belum ditambahkan
                if (lastAddedElementRef.current !== index) {
                    setLoadBoxElements(prevElements => [
                        ...prevElements,
                        <div key={index} className="load-box-item bg-info"></div>
                    ]);
                    lastAddedElementRef.current = index;
                }
            }
        }
        load_box();
    }, []);
    
    return (<div className='vh-100 d-flex justify-content-between'>
        <img src={Bg_Circle1} alt="Circle 1" style={{}}/>
        <div className='row align-items-end'>
            <div className='col-12'>
                <div className='d-flex flex-column align-items-center'>
                    <h1 className='title-web'>ISP</h1>
                    <h3 className='subtitle-web'>Information System PLN</h3>
                    <div className="load-box d-flex gap-1">
                        {loadBoxElements}
                    </div>
                </div>
            </div>
            <div className='col-12'>
                <div className='d-flex justify-content-center pb-3'>
                    <img src={LogoPLN} alt="Logo PLN" style={{}}/>
                    <div className='d-flex flex-column'>
                        <h5>Powered by</h5>
                        <h5>PLN</h5>
                    </div>
                </div>
            </div>
        </div>
        <img src={Bg_Circle2} alt="Circle 2" style={{}}/>
    </div>)
}

export default Loading;