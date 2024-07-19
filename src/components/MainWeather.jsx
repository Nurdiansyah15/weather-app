import moment from "moment"

const MainWeather = ({ cityName, weather, iteration }) => {
    return (
        <div>
            <h1 className='text-xl text-gray-500 text-center mb-8'>
                {cityName}, on {moment(weather?.daily?.time[iteration], "YYYY-MM-DD").format("dddd, DD MMMM YYYY")}
            </h1>

            <div className='flex gap-8 justify-center items-center'>
                <div className='flex flex-col items-center justify-center min-w-48'>
                    <div className='font-light text-6xl'>
                        {weather?.daily?.temperature_2m_mean[iteration]}<span className="text-2xl">{weather?.daily_units?.temperature_2m_mean}</span>
                    </div>
                </div>
                <div className='grid grid-cols-2 content-center items-center gap-x-4 min-w-20 text-gray-400'>
                    <div>
                        <img src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/wind.svg" alt="wind" className='max-w-12 contrast-50' />
                    </div>
                    <div>
                        <span className='text-2xl'>{weather?.daily?.wind_speed_10m_mean[iteration]}</span>{weather?.daily_units?.wind_speed_10m_mean}
                    </div>
                    <div>
                        <img src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/umbrella.svg" alt="umbrella" className='max-w-12 grayscale' />
                    </div>
                    <div>
                        <span className='text-2xl'>{weather?.daily?.relative_humidity_2m_mean[iteration]}</span>{weather?.daily_units?.relative_humidity_2m_mean}
                    </div>
                    <div>
                        <img src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/raindrop.svg" alt="raindrop" className='max-w-12 grayscale' />
                    </div>
                    <div>
                        <span className='text-2xl'>{weather?.daily?.rain_sum[iteration]}</span>{weather?.daily_units?.rain_sum}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainWeather