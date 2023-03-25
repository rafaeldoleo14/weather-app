
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface WeatherState {
    name: string
    country: string,
    temp: number,
    weather: string,
    isLoading: string
}

const initialState: WeatherState = {
    name: '',
    country: '',
    temp: 0,
    weather: '',
    isLoading: 'not-load'
}

interface WeatherPayload {
    name: string,
    country: string,
    temp: number,
    time: string,
    isLoading?: string
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        onWeather: (state, action: PayloadAction<WeatherPayload>) => {
            state.name = action.payload.name;
            state.country = action.payload.country;
            state.temp = Math.round(action.payload.temp);
            state.weather = action.payload.time;
        },
        startLoading: (state)=>{
            state.isLoading = 'ckecking'
        },
        endLoading: (state)=>{
            state.isLoading = 'load'
        }
    },
})

// Action creators are generated for each case reducer function
export const { onWeather, startLoading, endLoading } = weatherSlice.actions

export default weatherSlice.reducer