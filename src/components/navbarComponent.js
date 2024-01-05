
import { Link, useLocation } from 'react-router-dom';
import "./navbar.css";
import Firstian from '../images/firstian.jpg';
import { useEffect, useState } from 'react';

const NavLayout = () => {
    const location = useLocation();
    const [activePage, setActivePage] = useState('');
  
    useEffect(() => {
      // Mengupdate state activePage berdasarkan pathname dari useLocation
      setActivePage(location.pathname);
    }, [location.pathname]);
  
    return <>
        <nav class="navbar navbar-expand-lg bg-nav">
            <div class="container-fluid">
                <a class="navbar-brand title-nav" href="#">ISP</a>
                <div>
                    <p className='m-0 sub-nav'>Information System</p>
                    <p className='m-0 sub-nav'>PLN</p>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-5">
                        <li class={`nav-item ${activePage === '/' ? 'active' : ''}`}>
                            <Link class="nav-link nav-text" aria-current="page" to="/">PETA</Link>
                        </li>
                        <li class={`nav-item ${activePage === '/about' ? 'active' : ''}`}>
                            <Link class="nav-link nav-text" to="/about">TENTANG</Link>
                        </li>
                        <li class={`nav-item ${activePage === '/contact' ? 'active' : ''}`}>
                            <Link class="nav-link nav-text" to="/contact">KONTAK</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <div className='ps-5 pe-3'>
                            <p className='m-0'>Hai.....</p>
                            <p className='m-0 fw-bold'>Nicholas</p>
                        </div>
                        <div className='position-relative'>
                            <div className='position-absolute' style={{width: '15px', height: '15px', borderRadius: '50%', background: '#00FF38', right: 0,}}></div>
                            <Link to="/profile">
                                <img src={Firstian} alt="firstian" style={{width: '50px', height: '50px', borderRadius: '50%'}}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
};

export default NavLayout;