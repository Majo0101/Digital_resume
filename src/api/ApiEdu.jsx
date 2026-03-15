import axios from "axios";

const API_POINT_EDU = import.meta.env.VITE_API_POINT_EDU;
const API_KEY_EDU = import.meta.env.VITE_API_KEY_EDU;

const EduData = async (language) => {
      try {
            const response = await axios.get(API_POINT_EDU, {
                  headers: {
                        'Accept': 'application/json'
                  },
                  params: {
                        'apiKey': API_KEY_EDU,  // Pass the API key as a parameter
                        'language': language // Pass the language as a parameter
                  }
            });
            return response.data;
      } catch (error) {
            console.error("Failed to fetch data:", error);
            return null;
      }
};

export default EduData;

