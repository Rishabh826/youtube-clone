// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./Context/ContextApi";
import Header from "./Components/Header";
import SearchResult from "./Components/SearchResult";
import VideoDetails from "./Components/VideoDetails";
import Home from "./Components/Home";

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:searchQuery" element={<SearchResult />} />
          <Route path="/video/:id" element={<VideoDetails />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;
