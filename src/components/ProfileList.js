import React from "react";
import { Link } from "react-router-dom";

const ProfileList = ({ profiles }) => {
  return (
    <ul>
      {profiles.map((profile) => (
        <li key={profile.id}>
          <img src={profile.photo} alt={profile.name} />
          <p>{profile.name}</p>
          <p>{profile.description}</p>
          <Link to={`/profile/${profile.id}`}>View Details</Link>
        </li>
      ))}
    </ul>
  );
};

export default ProfileList;
