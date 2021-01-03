import axios from 'axios';
import { getTimezoneUrl } from '../utils/endpoints.js';

export const fetchTimezone = async ( timestamp, lat, lon ) => {
    const response = await axios.get( getTimezoneUrl( lat, lon )( timestamp ) );
    return response.data;
};
