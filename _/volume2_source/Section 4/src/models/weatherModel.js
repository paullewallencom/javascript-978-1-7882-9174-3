import axios from 'axios';
import { getOpenWeatherMapUrl } from '../utils/endpoints.js';

const todaysWeatherUrl = 
    getOpenWeatherMapUrl( 'weather' )( { units: 'metric' } );
const forecastUrl =
    getOpenWeatherMapUrl( 'forecast/daily' )( { units: 'metric', cnt: 16 } );

const getTodaysWeather = async ( city ) =>
    axios.get( todaysWeatherUrl( city ) );

const getWeatherForecast = async ( city ) =>
    axios.get( forecastUrl( city ) );

export const fetchWeather = async ( city ) => {
    const [ today, forecast ] = await Promise.all( [
        getTodaysWeather( city ),
        getWeatherForecast( city )
    ] );
    return { today: today.data, forecast: forecast.data };
}