import axios from "axios";

const API_POINT_GALL = import.meta.env.VITE_API_POINT_GALL;
const API_KEY_GALL = import.meta.env.VITE_API_KEY_GALL ;

const ApiGall = async (language) => {
      try {
            const response = await axios.get(API_POINT_GALL, {
                  headers: {
                        'Accept': 'application/json'
                  },
                  params: {
                        'apiKey': API_KEY_GALL,  // Pass the API key as a parameter
                        'language': language // Pass the language as a parameter
                  }
            });
            return response.data;
      } catch (error) {
            console.error("Failed to fetch data:", error);
            return null;
      }
};

export default ApiGall;