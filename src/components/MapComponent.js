import { MapContainer, Marker, Popup, TileLayer, GeoJSON, useMapEvents, Circle, CircleMarker} from 'react-leaflet';
import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import Frame from './mapFramer';
import customIconMark from '../images/markPemadaman.png';
import "../pages/map.css";
import { jawaTengahGeoJSON } from "../Data/long_latProvince";
import { markerPemadaman } from '../Data/markerPemadaman';
import { kotaKabJawaTengah } from '../Data/long_latKabKot';
import { spesificMarkerPemadaman } from "../Data/spesificMarkerPemadaman";
import ZoomLevelComponent from './getZoomLevel';

const MapComponent = ({ selectedMenu }) => {
    const [selectedData, setSelectedData] = useState(null);
    const [ZoomValue, setZoomValue] = useState(9);
    const fillBlueOptions = { fillColor: 'blue' }
    useEffect(() => {
      console.log(ZoomValue);
    });
    const handleMarkerPopupClick = (data) => {
        setSelectedData(data);
    };
    
    if (!jawaTengahGeoJSON || !jawaTengahGeoJSON.features) {
        return null; // or handle the case when data is not available
    }

    const feature = jawaTengahGeoJSON.features[0]; // Change the index based on your data

    // Check if the feature and its properties are defined
    if (!feature || !feature.properties) {
        return null; // or handle the case when data is not available
    }

    const onEachFeature = (feature, layer) => {
        const { NAME_1, NAME_2, TYPE_2 } = feature.properties;
        layer.bindPopup(`<b>${NAME_1}</b><br />${NAME_2}<br />${TYPE_2}`);
        const color = feature.properties.color || 'blue';
        layer.setStyle({
            fillColor: color,
            weight: 2,
            color: 'blue',
            });
    };

    const customIcon = new L.Icon({
        iconUrl: customIconMark,
        iconSize: [40, 60],
        iconAnchor: [15, 15],    
        popupAnchor: [0, -15],
    });

    return (
        <div className="map">
      <MapContainer center={[-7.150975, 110.1402594]} scrollWheelZoom={false} zoom={ZoomValue} className='position-relative' >
        <ZoomLevelComponent setZoomValue={setZoomValue}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON data={jawaTengahGeoJSON} style={{ fillColor: 'green', weight: 2, color: 'black' }}>
          {jawaTengahGeoJSON.features.map((feature, index) => (
            <Popup key={index}>
              <div>
                <p>ID: {feature.properties.ID || 'N/A'}</p>
                <p>Kode: {feature.properties.kode || 'N/A'}</p>
                <p>Provinsi: {feature.properties.Propinsi || 'N/A'}</p>
                <p>Sumber: {feature.properties.SUMBER || 'N/A'}</p>
              </div>
            </Popup>
          ))}
        </GeoJSON>
        <GeoJSON data={kotaKabJawaTengah} onEachFeature={onEachFeature} />
        {markerPemadaman.features.map((feature) => {
          const shouldShowMarker = ZoomValue <= 12 && selectedMenu === 'pemadaman';
          return shouldShowMarker ? (
            <Marker key={feature.properties.ID} position={[
              feature.geometry.coordinates[1],
              feature.geometry.coordinates[0],
              feature.geometry.coordinates[2]
            ]} icon={customIcon}
              eventHandlers={{
                click: () => {
                  handleMarkerPopupClick(feature.info)
                },
              }}
            >
              <Popup>
                <div>
                  <p>Kota: {feature.properties.NAME}</p>
                  <p>Deskripsi: {feature.properties.DESCRIPTION}</p>
                </div>
              </Popup>
            </Marker>
          ) : null;
        })}
        {spesificMarkerPemadaman.features.map((feature) => {
          const showSpesificMark = ZoomValue > 12 && selectedMenu === 'pemadaman';
          return showSpesificMark ? (
                <CircleMarker             
                  key={feature.properties.ID}
                  center={feature.geometry.coordinates}
                  radius={feature.geometry.radius}
                  pathOptions={fillBlueOptions}
                  eventHandlers={{ click: () => {
                    handleMarkerPopupClick(feature.info)
                  }, 
                }}>
                    <Popup>
                      <div>
                        <p>Kab/Kot: {feature.properties.NAME1}</p>
                        <p>Kecamatan: {feature.properties.NAME2}</p>
                        <p>Penyebab: {feature.properties.DESCRIPTION}</p>
                      </div>
                    </Popup>
                </CircleMarker>
          ) : null;
        })}
        <Frame selectedData={selectedData} ZoomLevelValue={ZoomValue}/>
        </ZoomLevelComponent>
      </MapContainer>
    </div>
    )
}

export default MapComponent;
