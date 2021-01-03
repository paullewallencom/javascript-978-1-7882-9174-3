import { fetchWeather } from './weatherModel';
import { fetchTimezone } from './timezoneModel';

export const fetchCityData = async ( city ) => {
    const weatherResponse = await fetchWeather( city );
    const timestamp = weatherResponse.today.dt;
    const { lat, lon } = weatherResponse.today.coord;
    const timezoneResponse = await fetchTimezone( timestamp, lat, lon );

    return {
        today: weatherResponse.today,
        forecast: weatherResponse.forecast,
        timezoneResponse
    }
};