
import React from 'react'
import coldImg from '../../../assets/cold-bg.jpg'

export const Main = () => {
  return (
    <>

        <div className='d-flex justify-content-center align-items-center container-fluid w-100 vh-100 bg-dark'>

            <div className='d-flex flex-column justify-content-center gap-2 align-items-center bg-dark w-25 h-75 position-relative'>

                {/* Imagen de fondo */}
                <img src={coldImg} alt='Imagen frio' className='opacity-75 img-fluid w-100 h-100 position-absolute'/>

                {/* Contenedor del input */}
                <div className='d-flex justify-content-center position-absolute top-0 w-100 z-1'>
                    <input type="text" className='form-control w-75 rounded-0 rounded-bottom-4 focus'/>
                </div>

                {/* Contenedor ciudad y fecha */}
                <div className='d-flex flex-column position-relative text-center text-white'>

                  <h3 style={{textShadow: '3px 2px 1px gray'}}>New York City, US</h3>
                  <p className='font-italic'>Saturday 11 january 2020</p>

                </div>

                {/* Contenedor de los grados */}
                <div style={{boxShadow: '3px 5px 1px gray'}}
                className='d-flex justify-content-center align-items-center position-relative bg-light opacity-50 w-50 p-3 rounded-3'>
                  <h1 style={{textShadow: '2px 1px 1px gray', fontSize: '4em'}} className='text-black'>15°C</h1>
                </div>

                {/* Contenedor tipo de clima */}

                <div className='position-relative'>
                  <h1 className='text-white'>Sunny</h1>
                </div>

            </div>

        </div>

    </>
  )
}
