import React from "react";
import { useParams, Link } from "react-router-dom";

const Profile = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) return <h2>Profile not found!</h2>;

  return (
    <div>
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} />
      <p>{profile.description}</p>
      <Link to="/map">View on Map</Link>
      <br />
      <Link to="/">Back</Link>
    </div>
  );
};

export default Profile;
