// src/api.js

import axios from "axios";

const API_BASE_URL = "https://api.example.com/v1"; // Replace with your API base URL
const API_KEY = "3ebc7b7905msh611e3a0f2eaf0c8p1172b5jsn65e12dd9d1a3"; // Replace with your actual API key

export const fetchDataFromApi = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`, {
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        api_key: API_KEY, // Include the API key as a query parameter
        ...params
      }
    });
    return response.data;
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};
