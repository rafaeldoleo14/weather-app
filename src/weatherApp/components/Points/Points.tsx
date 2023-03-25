import React from 'react'
import { useAppSelector } from '../../hooks/hooks';

export const Points = () => {

  const {temp} = useAppSelector(state => state.weather);

  return (
    <>
    
        {/* Contenedor de los grados */}
        <div style={{boxShadow: '3px 5px 1px gray'}}
            className='d-flex justify-content-center align-items-center position-relative bg-light opacity-50 w-50 p-3 rounded-3'>

            <h1 style={{textShadow: '2px 1px 1px gray', fontSize: '4em'}} className='text-black'>{temp}°C</h1>
            
        </div>
    
    </>
  )
}
