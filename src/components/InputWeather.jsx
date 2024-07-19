import moment from 'moment'
import React from 'react'

const InputWeather = ({ city, setCity, startDate, setStartDate, endDate, setEndDate }) => {
    return (
        <div className='flex justify-center gap-4'>
            <input type='text' className={'text-black text-center font-semibold border-b-2 border-gray-400 bg-transparent'} placeholder='City' value={city} onChange={e => setCity(e.target.value)} autoFocus />
            <input type="date" className={'text-black text-center font-semibold border-b-2 border-gray-400 bg-transparent'} value={startDate} onChange={e => setStartDate(moment(e.target.valueAsDate).format("yyyy-MM-DD"))} />
            <input type="date" className={'text-black text-center font-semibold border-b-2 border-gray-400 bg-transparent'} value={endDate} onChange={e => setEndDate(moment(e.target.valueAsDate).format("yyyy-MM-DD"))} />
        </div>
    )
}

export default InputWeather