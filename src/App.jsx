import { useEffect, useState } from "react";
import DayWeather from "./components/DayWeather";
import MainWeather from "./components/MainWeather";
import AppHandlers from "./handler/AppHandlers";
import InputWeather from "./components/InputWeather";
import moment from "moment";

// Inisialize handlers
const { getForecast, getLatLonByCity } = AppHandlers;

function App() {
  const [city, setCity] = useState("Jakarta")
  const [cityName, setCityName] = useState("Jakarta")
  const [startDate, setStartDate] = useState(moment().format("yyyy-MM-DD"))
  const [endDate, setEndDate] = useState(moment(Date.now()).add(3, 'days').format("yyyy-MM-DD"))
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true)

  const getWeather = async (lat, lon) => {
    try {
      const response = await getForecast(lat, lon, startDate, endDate);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching forecast:", error);
    }
  };

  const getCity = async () => {
    try {
      const response = await getLatLonByCity(city);
      getWeather(response.data[0]?.latitude, response.data[0]?.longitude)
      setCityName(response.data[0]?.name)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching city:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    if (city != "") {
      getCity(city)
    }
  }, [city]);

  return (
    <div className="container mx-auto py-8 max-w-screen-md px-8">
      <div className="mockup-window bg-base-300 border">
        <div className="bg-base-200 flex flex-col justify-center px-4 py-16 gap-16">
          <InputWeather city={city} setCity={setCity} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
          <MainWeather cityName={cityName} />
          <div className="flex gap-12 justify-center">
            <DayWeather />
            <DayWeather />
            <DayWeather />
            <DayWeather />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
