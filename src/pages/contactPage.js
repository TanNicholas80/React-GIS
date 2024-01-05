import home from '../images/rumah.png';
import mail from '../images/mail.png';
import phone from '../images/phone.png';

const contact = () => {
    return (<div className='container'>
        <h1 className='text-center fw-bold'>KONTAK</h1>
        <div className="d-flex flex-row gap-3" >
            <div className="bg-primary p-4 d-flex flex-column justify-content-center" style={{ borderRadius: '10px' }}>
                <div className='d-flex flex-row align-items-center mb-3'>

                    <img src={phone} style={{ width: '30px', height: '30px' }} alt="gambar tidak ada" />
                    <p className='text-white form-label ml-2 mb-0' style={{fontSize: '20px', fontWeight: 600}}>: 0816956469</p>
                </div>
                <div className='d-flex flex-row align-items-center'>

                    <img src={mail} style={{ width: '30px', height: '30px' }} alt="gambar tidak ada" />
                    <p className='text-white ml-2 mb-0' style={{fontSize: '20px', fontWeight: 600}}>: informationsystempln@gmail.com</p>
                </div>

            </div>
            <div className="bg-primary p-2" style={{ borderRadius: '10px', width: '878px' }}>
                <div className='d-flex flex-row align-items-center mb-3'>
                    <img src={home} style={{ width: '30px', height: '30px' }} alt="gambar tidak ada" />
                    <p className='ps-2 text-white mb-0' style={{fontSize: '30px', fontWeight: 600}}>Kantor</p>
                </div>
                <p className='text-white' style={{ fontSize: '25px', fontWeight: 600 }}>
                    Jalan Pendrikan Kidul No. 58, Semarang Tengah, Semarang, Jawa Tengah.
                </p>
            </div>
        </div>
        <div className='bg-primary d-flex flex-column justify-content-center p-4 mt-3' style={{ borderRadius: '10px' }}>
            <div class="mb-3">
                <label className='text-white' for="nama" style={{fontSize: '30px', fontWeight: 600}}>Nama:</label>
                <input type="text" class="form-control" id="nama" />
            </div>
            <div class="mb-3">
                <label className='text-white' for="phone" style={{fontSize: '30px', fontWeight: 600}}>Nomor Telpon:</label>
                <input type="email" class="form-control" id="phone" />
            </div>
            <div class="mb-3">
                <label className='text-white' for="keluhan" style={{fontSize: '30px', fontWeight: 600}}>Keluhan:</label>
                <textarea class="form-control" id="keluhan" rows="10"></textarea>
            </div>
            <div className='d-flex align-self-center'>
                <button type="button" class="btn text-white" style={{background: '#25E04E', width: '200px', fontSize: '30px', fontWeight: 600}}>KIRIM</button>
            </div>
        </div>
    </div>)
}

export default contact;