import axios from "axios";

const API_POINT_EXP = import.meta.env.VITE_API_POINT_EXP;
const API_KEY_EXP = import.meta.env.VITE_API_KEY_EXP;

const ApiExp = async (language) => {
      try {
            const response = await axios.get(API_POINT_EXP, {
                  headers: {
                        'Accept': 'application/json'
                  },
                  params: {
                        'apiKey': API_KEY_EXP,  // Pass the API key as a parameter
                        'language': language // Pass the language as a parameter
                  }
            });
            return response.data;
      } catch (error) {
            console.error("Failed to fetch data:", error);
            return null;
      }
};

export default ApiExp;