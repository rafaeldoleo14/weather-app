
import React from 'react'
import { useAppSelector } from '../../hooks/hooks';

export const TypesWeather = () => {

  const {weather} = useAppSelector(state => state.weather);

  return (
    <>
    
        {/* Contenedor tipo de clima */}
        <div className='position-relative'>
            <h1 className='text-white'>{weather}</h1>
        </div>
    
    </>
  )
}
