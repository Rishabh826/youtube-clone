// src/Components/SearchResultVideoCard.js
import React from "react";
import { Link } from "react-router-dom";

const SearchResultVideoCard = ({ video }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <Link to={`/video/${video.videoId}`}>
        <img
          src={video.thumbnails[0]?.url}
          alt={video.title}
          className="w-full h-40 object-cover rounded-lg"
        />
        <h3 className="mt-2 text-lg font-bold">{video.title}</h3>
        <p className="text-gray-400">{video.author?.title}</p>
      </Link>
    </div>
  );
};

export default SearchResultVideoCard;
