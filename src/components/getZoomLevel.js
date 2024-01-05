import { useState } from 'react';
import { useMapEvents } from 'react-leaflet';

const useZoomLevel = () => {
  const map = useMapEvents({
    zoomend: () => {
      setZoomLevel(map.getZoom());
    },
  });

  const [zoomLevel, setZoomLevel] = useState(map.getZoom());

  return zoomLevel;
};

function ZoomLevelComponent({children, setZoomValue}) {
  const zoomLevel = useZoomLevel();

  // Now you can use the zoomLevel in your component as needed
  // console.log('Current Zoom Level:', zoomLevel);
  setZoomValue(zoomLevel);

  return (<>{children}</>);
}


export default ZoomLevelComponent;