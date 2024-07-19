import React, { useState } from 'react'

const MainWeather = () => {
    const [city, setCity] = useState("Raguanan, Jakarta")
    return (
        <div>
            <h1 className='text-3xl text-gray-500 text-center mb-8'>
                Right now in <input type='text' className={'text-black text-center font-semibold border-b-2 border-gray-400 bg-transparent'} style={{ width: city.length ? city.length + "ch" : "1ch" }} value={city} onChange={e => setCity(e.target.value)} autoFocus />
                , it's Couldy.
            </h1>

            <div className='flex gap-4 justify-center items-center'>
                <div>
                    <img src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/clear-day.svg" alt="clear" className='min-w-48' />
                </div>
                <div className='flex flex-col items-center justify-center min-w-48'>
                    <div className='font-light text-9xl'>
                        61
                    </div>
                    <div className='text-gray-400'>
                        56° / 56°
                    </div>
                </div>
                <div className='grid grid-cols-2 content-center items-center gap-x-4 min-w-20 text-gray-400'>
                    <div>
                        <img src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/wind.svg" alt="wind" className='max-w-12 contrast-50' />
                    </div>
                    <div>
                        <span className='text-3xl'>5</span>Kmh
                    </div>
                    <div>
                        <img src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/umbrella.svg" alt="umbrella" className='max-w-12 grayscale' />
                    </div>
                    <div>
                        <span className='text-3xl'>8</span>%
                    </div>
                    <div>
                        <img src="https://bmcdn.nl/assets/weather-icons/v3.0/line/svg/raindrop.svg" alt="raindrop" className='max-w-12 grayscale' />
                    </div>
                    <div>
                        <span className='text-3xl'>10</span>%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainWeather