import profilepict from '../images/aboutprofile.png'
const About = () => {
    return (<>
        <div className="aboutLay mt-0 mt-md-4 mt-lg-5 d-flex flex-wrap flex-lg-nowrap flex-lg-row flex-sm-row">
            <img className='mx-auto' src={profilepict} />
            <div className="aboutInfo p-2 p-md-3 d-flex flex-column justify-content-center">
                <h4>Apa itu ISP?</h4>
                <p>Website pemetaan aliran listrik di Jawa Tengah dengan nama ISP
                    (Information System PLN) merupakan platform yang memberikan informasi
                    terkini mengenai distribusi dan aliran listrik di Jawa Tengah Melalui website ini,
                    pengguna dapat dengan mudah mengakses data real-time tentang keadaan jaringan
                    listrik, pemadaman yang mungkin terjadi, pembangkit listrik. Dengan demikian,
                    website ini menjadi alat yang sangat berguna bagi masyarakat, pihak industri, dan
                    otoritas terkait dalam mengelola, memonitor, dan merencanakan pengembangan
                    infrastruktur listrik di wilayah tersebut.</p>
            </div>
        </div>
    </>);
}

export default About;