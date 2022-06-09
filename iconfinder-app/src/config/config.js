const API_KEY = process.env.REACT_APP_WEATHER_API;
const API_BASE_URL = process.env.REACT_APP_WEATHER_API_URL;

if (!API_BASE_URL) {
  throw new Error(
    ".env is missing the definition for REACT_APP_API_BASE_URL environment variable"
  );
}

export { API_BASE_URL, API_KEY };
