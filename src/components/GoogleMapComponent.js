import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  margin: "20px auto",
  overflow: "hidden",
};

const GoogleMapComponent = ({ profiles }) => {
  const center = profiles.length > 0 ? profiles[0].address : { lat: 37.7749, lng: -122.4194 };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "15px", fontFamily: "Arial, sans-serif", color: "#333" }}>
        Profile Locations
      </h2>
      <LoadScript googleMapsApiKey="">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {profiles.map((profile) => (
            <Marker key={profile.id} position={profile.address} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
