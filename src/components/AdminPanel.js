import React, { useState } from 'react';

const AdminPanel = ({ profiles, setProfiles }) => {
  const [newProfile, setNewProfile] = useState({ name: '', photo: '', description: '', address: '' });

  const addProfile = () => {
    setProfiles([...profiles, { id: profiles.length + 1, ...newProfile }]);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
      <h2 style={{ fontFamily: "Arial, sans-serif", color: "#444" }}>Admin Panel</h2>
      <input
        type="text"
        placeholder="Name"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ddd",
          borderRadius: "6px",
        }}
        onChange={e => setNewProfile({ ...newProfile, name: e.target.value })}
      />
      <button
        style={{
          padding: "10px 15px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "background 0.3s",
        }}
        onClick={addProfile}
      >
        Add Profile
      </button>
    </div>
  );
};

export default AdminPanel;
