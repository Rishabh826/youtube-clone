// src/Components/Home.js
import React, { useState, useEffect, useContext } from "react";
import { fetchDataFromApi } from "../Utils/api";
import { Context } from "../Context/ContextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const { setLoading } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchHomeVideos();
  }, []);

  const fetchHomeVideos = async () => {
    setLoading(true);
    try {
      const res = await fetchDataFromApi(`search/?q=trending`);
      setVideos(res?.contents || []);
    } catch (error) {
      console.error("Error fetching home videos: ", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {videos?.map((item) => {
            if (item?.type !== "video") return null;
            let video = item?.video;
            return <VideoCard key={video?.videoId} video={video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
