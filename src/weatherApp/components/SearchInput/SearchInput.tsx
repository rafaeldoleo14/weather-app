
import React, { ChangeEvent, FormEvent, useState } from 'react';
import {useDispatch} from 'react-redux';
import { getWeither } from '../../../store/slices/weather/thunks';
import {AppDispatch} from '../../../store/store'
import { useAppDispatch } from '../../hooks/hooks';


export const SearchInput = () => {

  const [location, setLocation] = useState<string>('');
  const dispatch = useAppDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setLocation(e.target.value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    dispatch(getWeither(location));
  } 

  return (
    <>
    
        <div className='d-flex justify-content-center position-absolute top-0 w-100 z-1'>

          <form onSubmit={onSubmit} action="" className='w-100 d-flex justify-content-center'>
            <input onChange={onChange} type="text" className='form-control w-75 rounded-0 rounded-bottom-4 focus'/>
          </form>

        </div>
    
    </>
  )
}
