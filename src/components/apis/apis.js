import axios from "axios";

const API_URL = "https://mockapi.wellics.cloud/api";

const apis = {
  fetchUser: async () => {
    try {
      const response = await axios.get(`${API_URL}/user`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch user data.");
    }
  },

  fetchMetrics: async (type, duration) => {
    try {
      const response = await axios.get(`${API_URL}/metrics`, {
        params: { type, duration },
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch metrics data.");
    }
  },

  fetchTip: async () => {
    try {
      const response = await axios.get(`${API_URL}/tips`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch wellness tip.");
    }
  },
};

export default apis;
