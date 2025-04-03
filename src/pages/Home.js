import React, { useState } from "react";
import ProfileList from "../components/ProfileList";
import SearchFilter from "../components/SearchFilter";

const Home = ({ profiles }) => {
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  return (
    <div>
      <h2>Profiles</h2>
      <SearchFilter profiles={profiles} setFilteredProfiles={setFilteredProfiles} />
      <ProfileList profiles={filteredProfiles} />
    </div>
  );
};

export default Home;
