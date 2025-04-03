import React from "react";
import GoogleMapComponent from "../components/GoogleMapComponent";

const Map = ({ profiles }) => {
  return (
    <div>
      <h2>Profile Locations</h2>
      <GoogleMapComponent profiles={profiles} />
    </div>
  );
};

export default Map;
