import Firstian from '../images/firstian.jpg';
import IconEdit from '../images/edit.png';

const profile = () => {
    return (<div className="d-flex flex-column align-items-center justify-content-center" style={{height: '90vh'}}>
        <h1 className='fw-bold mb-5'>PROFIL</h1>
        <div className="d-flex" style={{borderRadius: "23px", background: "#008BE4"}}>
            <img alt="Profile-img" src={Firstian} style={{width: "320px", borderRadius: "23px"}}/>
            <div className='p-5 d-flex flex-column'>
                <p className='text-white fw-bold' style={{fontSize: '24px'}}>Nama : Nicholas</p>
                <p className='text-white fw-bold' style={{fontSize: '24px'}}>No. Telepon : 0816454862123</p>
                <p className='text-white fw-bold' style={{fontSize: '24px'}}>Email : yehezkiel@gmail.com</p>
                <p className='text-white fw-bold' style={{fontSize: '24px'}}>Alamat : Jalan pendrikan kidul No.10</p>
                <button className='btn btn-light fw-bold align-self-end d-flex align-items-center' style={{fontSize: '24px'}}>
                    <img alt='Edit Icon' src={IconEdit} style={{width: "40px"}} className='me-2'/>
                    Ubah
                </button>
            </div>
        </div>
    </div>
    );
}

export default profile;