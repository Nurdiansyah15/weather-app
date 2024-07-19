import axios from "axios";

const getForecast = async (latitude, longitude, startDate, endDate) => {
  const forecastUrl =
    import.meta.env.VITE_BACKEND_API +
    "latitude=" +
    latitude +
    "&longitude=" +
    longitude +
    "&startDate=" +
    startDate +
    "&endDate=" +
    endDate;

  return await axios.get(forecastUrl);
};

const getLatLonByCity = async (city) => {
  const CityUrl = import.meta.env.VITE_CITY_NINJAS_LINK_API + "name=" + city;

  return await axios.get(CityUrl, {
    headers: {
      "X-Api-Key": import.meta.env.VITE_API_KEY_NINJAS,
    },
  });
};

export default {
  getForecast,
  getLatLonByCity,
};
