
import moment from 'moment';
import React from 'react'

export const useDate = () => {
  
    const now = moment();
    const formattedDateTime: string = now.format('dddd DD MMMM YYYY');

    return {
        formattedDateTime
    }

}
