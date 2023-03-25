
import React from 'react'
import { useAppSelector } from '../../hooks/hooks'

export const ErrorMessage = () => {

    const {errorMessage} = useAppSelector(state => state.weather);
    
  return (
    <h2 className='text-white position-relative text-uppercase'>{errorMessage}</h2>
  )
}
