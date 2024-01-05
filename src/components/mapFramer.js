import { Line, Doughnut } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import flash from '../images/flash.png';
import file_text from '../images/file-text.png';
import home from '../images/home.png';
import { useState } from "react";
import './framer.css';

const Frame = ({selectedData, ZoomLevelValue}) => {
    const [isPLNVisible, setPLNVisible] = useState(true);

    const togglePLNVisibility = () => {
      setPLNVisible(!isPLNVisible);
    };
    const dataPadam = {
        labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        datasets: [
            {
                label: "Tingkat Pemadaman Listrik",
                data: selectedData ? selectedData.pemadaman_bulanan : [],
                fill: true,
                backgroundColor: "rgba(45,173,255,0.15)",
                pointBackgroundColor: "rgba(45,173,255,0.15)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };
    const dataAkibat = {
        datasets: [{
            data: selectedData ? selectedData.info_pln : [],
            backgroundColor: ['#ECC600', '#13EC00', '#008BE4'],
        }],
        labels: [
            'kabel putus',
            'cuaca buruk',
            'pembangkit listrik'
        ],

    };

    const locations = selectedData ? selectedData.kecamatan_padam : [];

    return (
    <div className={`PLNDetail ps-5 position-absolute ${isPLNVisible ? 'visible' : 'hidden'}`} style={{zIndex: 1000, right: 0, overflowY: 'scroll', height: 'inherit'}}>
        <div className={`toggle-button ${isPLNVisible ? 'active-ai' : ''}`} onClick={togglePLNVisibility}></div>
        <h4>Data {selectedData && ZoomLevelValue <= 12 ? selectedData.kota_kab : selectedData?.kec}</h4>
        <hr></hr>
        <p>Tingkat Pemadaman Listrik</p>
        <div className="chartPLN">
            <Line id="graphLine" data={dataPadam} />

        </div>
        <hr style={{
            /* Line 16 */
            position: 'absolute',
            width: '183px',
            height: '0px',
            left: '89px',
            top: '442px',
            border: '3px solid #CACACA',

        }}></hr>
        <div className="chartInfo">
            <div className="cardPLN">
                <p>{ZoomLevelValue <= 12 ? 'Rumah Terdampak Pemadaman Bulan ini' : 'Rumah Padam Listrik Saat Ini'}</p>
                <div className="d-flex flex-row">

                    <span>{selectedData && ZoomLevelValue <= 12 ? selectedData.rumah_pemadaman : selectedData?.rumah_padam}</span>
                    <img src={flash} alt="tidak ada foto" />
                </div>
            </div>
            <div className="cardPLN">
                <p>{ZoomLevelValue <= 12 ? 'Aduan Pemadaman Listrik Bulan Ini' : 'Rumah Terakumulasi Padam Listrik'}</p>
                <div className="d-flex flex-row">

                    <span>{selectedData && ZoomLevelValue <= 12 ? selectedData.aduan : selectedData?.rumah_akumulasi}</span>
                    <img src={ZoomLevelValue <= 12 ? file_text : flash} alt="tidak ada foto" />
                </div>
            </div>
            <div className="cardPLN">
                <p>{ZoomLevelValue <= 12 ? 'Rata-rata Rumah Padam Listrik' : 'Total Rumah Mengalami Pemadaman Listrik'}</p>
                <div className="d-flex flex-row">

                    <span>{selectedData && ZoomLevelValue <= 12 ? selectedData.rata_rata : selectedData?.total_rumah_padam}</span>
                    <img src={home} alt="tidak ada foto" />
                </div>
            </div>
            <div className="cardPLN">
                <p>{ZoomLevelValue <= 12 ? 'Kecamatan Yang Sering Terdampak Padam Listrik' : 'Total Pemadaman yang Terjadi Pada Bulan ini'}</p>
                {ZoomLevelValue <= 12 ? (
                    <ul>
                        {locations.map((location, index) => (
                            <li key={index}>{location}</li>
                        ))}
                    </ul>
                ) : (
                    <div className="d-flex flex-row">
                        <span>{selectedData ? selectedData.total_pemadaman_bulanan : 0}</span>
                        <img src={flash} alt="tidak ada foto" />
                    </div>
                )}
            </div>
        </div>
        <div className="chartAkibat d-flex flex-row">
            <Doughnut data={dataAkibat} />
        </div>

    </div>
    )
}

export default Frame;