import React from 'react'

const DayWeather = () => {
    return (
        <div className='flex flex-col items-center gap-4'>
            <img src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-day.svg" alt="clear" className='w-12' />
            <div className='text-gray-400 text-2xl'>
                56° / 56°
            </div>
            <div className='uppercase'>
                Mon
            </div>
        </div>
    )
}

export default DayWeather