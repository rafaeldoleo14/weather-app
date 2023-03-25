import { Dispatch } from "@reduxjs/toolkit";
import { api } from "../../../api/api";
import { endLoading, onWeather, startLoading } from "./weatherSlice";

export const getWeither = (location: string)=>{

    return async(dispatch: Dispatch)=>{

        try {

            dispatch(startLoading());

            const data = await fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`)
    
            const resp = await data.json();

            const {name, sys, main, weather, message: errorMessage} = resp;

            if(errorMessage !== undefined){
                return dispatch(
                    onWeather(
                    {
                        ok: false, 
                        errorMessage, 
                        name : '',
                        country: '', 
                        temp: 0, 
                        time: ''
                    }))
            }

            const {country} = sys;
            const {temp} = main;
            const {main: time} = weather[0];

            dispatch(onWeather({ok: true, errorMessage: '', name, country, temp, time}))

            dispatch(endLoading());
            
        } catch (error) {
            console.log('Error:', error); // Maneja el error de la solicitud
        }   

    }

}