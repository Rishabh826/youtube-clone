// src/Context/ContextApi.js
import React, { createContext, useState } from "react";

// Create the context
export const Context = createContext();

// Define and export the ContextProvider
export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Context.Provider value={{ loading, setLoading }}>
      {children}
    </Context.Provider>
  );
};
