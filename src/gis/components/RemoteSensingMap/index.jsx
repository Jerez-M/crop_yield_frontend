import React, { useState } from 'react';
import { LayersControl, MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const RemoteSensingMap = () => {
  const [selectedLayer, setSelectedLayer] = useState('satellite');
  
  // Center on a default agricultural region
  const position = [-1.286389, 36.817223]; // Kenya
  
  // Sample GeoJSON for demonstration - this would be replaced with actual field data
  const sampleField = {
    type: "Feature",
    properties: {
      name: "Sample Maize Field",
      ndvi: 0.72,
      health: "Excellent"
    },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [36.817223, -1.286389],
        [36.827223, -1.286389],
        [36.827223, -1.296389],
        [36.817223, -1.296389],
        [36.817223, -1.286389]
      ]]
    }
  };
  
  // Style function for the GeoJSON layer based on NDVI values
  const fieldStyle = (feature) => {
    const ndvi = feature.properties.ndvi || 0;
    return {
      fillColor: getNdviColor(ndvi),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  };
  
  // Get color based on NDVI value
  const getNdviColor = (ndvi) => {
    return ndvi > 0.8 ? '#006400' :
           ndvi > 0.6 ? '#32CD32' :
           ndvi > 0.4 ? '#ADFF2F' :
           ndvi > 0.2 ? '#FFFF00' :
           ndvi > 0 ? '#FF8C00' :
                      '#FF0000';
  };
  
  // Popup content for field
  const onEachFeature = (feature, layer) => {
    if (feature.properties) {
      layer.bindPopup(`
        <div class="field-popup">
          <h4>${feature.properties.name}</h4>
          <p>NDVI: ${feature.properties.ndvi}</p>
          <p>Health: ${feature.properties.health}</p>
        </div>
      `);
    }
  };

  return (
    <div className="remote-sensing-map">
      <MapContainer 
        center={position} 
        zoom={13} 
        style={{ height: '400px', width: '100%', borderRadius: '8px' }}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked={selectedLayer === 'satellite'} name="Satellite Imagery">
            <TileLayer
              url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
              maxZoom={20}
              subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
              attribution="&copy; Google Maps"
            />
          </LayersControl.BaseLayer>
          
          <LayersControl.BaseLayer checked={selectedLayer === 'osm'} name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </LayersControl.BaseLayer>
          
          <LayersControl.Overlay checked name="NDVI Analysis">
            <GeoJSON 
              data={sampleField} 
              style={fieldStyle}
              onEachFeature={onEachFeature}
            />
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
};

export default RemoteSensingMap;