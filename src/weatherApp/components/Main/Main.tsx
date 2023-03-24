
import React from 'react'
import coldImg from '../../../assets/cold-bg.jpg'
import { CityInfo, Points, SearchInput, TypesWeather } from '../index'

export const Main = () => {
  return (
    <>

        <div className='d-flex justify-content-center align-items-center container-fluid w-100 vh-100 bg-dark'>

            <div className='d-flex flex-column justify-content-center gap-2 align-items-center bg-dark w-25 h-75 position-relative'>

                {/* Imagen de fondo */}
                <img src={coldImg} alt='Imagen frio' className='opacity-75 img-fluid w-100 h-100 position-absolute'/>

                <SearchInput/>
                
                <CityInfo/>

                <Points/>

                <TypesWeather/>

            </div>

        </div>

    </>
  )
}
