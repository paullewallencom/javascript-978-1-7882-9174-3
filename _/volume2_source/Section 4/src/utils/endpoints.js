import { WEATHER_API_KEY, GOOGLE_TIMEZONE_API_KEY } from '../constants/const.js';


export const getParamString = ( params = {} ) => 
    Object.entries( params ).reduce( ( acc, param ) => 
        `${acc}&${param[0]}=${param[1]}`, '' );

export const getOpenWeatherMapUrl = 
    endpoint =>
    params =>
    city =>
    `http://api.openweathermap.org/data/2.5/` +
    `${endpoint}?q=${city}&appid=${WEATHER_API_KEY}` +
    getParamString( params );

export const getTimezoneUrl =
    ( lat, lon ) => 
    timestamp =>
    `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}` +
    `&timestamp=${timestamp}&key=${GOOGLE_TIMEZONE_API_KEY}`;