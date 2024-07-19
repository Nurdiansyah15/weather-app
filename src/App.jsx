import { useEffect, useState } from "react";
import DayWeather from "./components/DayWeather";
import MainWeather from "./components/MainWeather";
import AppHandlers from "./handler/AppHandlers";
import InputWeather from "./components/InputWeather";
import moment from "moment";

// Initialize handlers
const { getForecast, getLatLonByCity } = AppHandlers;

function App() {
  const [city, setCity] = useState("Jakarta")
  const [cityName, setCityName] = useState("Jakarta")
  const [startDate, setStartDate] = useState(moment().format("yyyy-MM-DD"))
  const [endDate, setEndDate] = useState(moment(Date.now()).add(3, 'days').format("yyyy-MM-DD"))
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true)

  const getWeather = async (lat, lon) => {
    try {
      const response = await getForecast(lat, lon, startDate, endDate);
      setWeather(response.data);
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
    } catch (error) {
      console.error("Error fetching city:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    if (city != "") {
      getCity(city)
    }
  }, [city]);

  useEffect(() => {
    setLoading(true);
    if (city != "") {
      getCity(city)
    }
  }, [startDate, endDate]);

  return (
    <div className="container mx-auto py-8 max-w-screen-lg px-8">
      <div className="mockup-window bg-base-300 border">
        <div className="bg-base-200 flex flex-col justify-center px-4 py-16 gap-16">
          <InputWeather city={city} setCity={setCity} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
          {
            loading ? (
              <div className="min-h-60 flex items-center justify-center">Loading ...</div>
            ) : (
              <div className="flex flex-wrap gap-16 justify-center">
                {
                  weather?.daily?.time?.map(
                    (element, index) => (
                      <MainWeather cityName={cityName} weather={weather} iteration={index} key={index} />
                    )
                  )
                }
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
