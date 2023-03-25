
import React from 'react'
import { useAppSelector } from '../../hooks/hooks';
import { useDate } from '../../hooks/useDate';

export const CityInfo = () => {

  const {name, country} = useAppSelector(state => state.weather);
  const {formattedDateTime} = useDate();

  return (
    <>
    
        {/* Contenedor ciudad y fecha */}
        <div className='d-flex flex-column position-relative text-center text-white'>

            <h3 style={{textShadow: '3px 2px 1px gray'}}>{name}, {country}</h3>
            <p className='font-italic'>{formattedDateTime}</p>

        </div>
    
    </>
  )
}
