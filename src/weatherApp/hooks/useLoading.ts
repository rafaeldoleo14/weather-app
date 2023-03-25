
import React, { useEffect, useState } from 'react'
import { useAppSelector } from './hooks';

export const useLoading = () => {
  
  const {isLoading} = useAppSelector(state => state.weather);
  const [onloading, setOnLoading] = useState(false);

    useEffect(()=>{
        if(isLoading === 'checking'){
            setOnLoading(false);
        }
        
        else if(isLoading === 'load'){
            setOnLoading(true);
        }

    },[isLoading])

    return {
        onloading
    }

}
