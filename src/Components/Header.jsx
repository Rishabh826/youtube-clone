// src/Components/Header.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <header className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">YouTube Clone</h1>
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded-l-lg"
          placeholder="Search..."
        />
        <button type="submit" className="p-2 bg-red-500 rounded-r-lg">
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
