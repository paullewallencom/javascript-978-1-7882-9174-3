import moment from 'moment-timezone';

export const getCity = response => response.name;

export const getCountry = response => response.sys.country;

export const getWeatherData = response =>
    `${response.weather[0].main} (${response.weather[0].description})`;

export const getTodaysTemperatures = response =>
    `Temperature (min, average, max): ` +
    `${response.main.temp_min}, ${response.main.temp}, ${response.main.temp_max}`;

export const getSunriseSunset = ( weatherResponse, timezoneResponse ) => {
    const { timeZoneId } = timezoneResponse;
    const { sunrise, sunset } = weatherResponse.sys;
    const sunriseTs = parseInt( sunrise, 10 ) * 1000;
    const sunsetTs = parseInt( sunset, 10 ) * 1000;
    const sunriseHhMm = moment.tz( sunriseTs, timeZoneId ).format('HH:mm');
    const sunsetHhMm = moment.tz( sunsetTs, timeZoneId ).format('HH:mm');
    return `Sunrise: ${ sunriseHhMm }, Sunset: ${ sunsetHhMm }`;
};

export const getTodaysTemplate = ( weather, timezone ) => `
<div>${getCity( weather )}, ${getCountry( weather )}: ${getWeatherData( weather )}</div>
<div>${getTodaysTemperatures( weather )}</div>
<div>${getSunriseSunset( weather, timezone )}</div>`.trim();  

export const getForecastRow = ( weather, timezone ) => rowNumber => {
    const row = weather.list[ rowNumber ];
    const date = moment.tz( row.dt * 1000, timezone.timeZoneId ).format( 'MMM Do' );
    return `
<tr>
    <td>${ date }</td>
    <td>${ row.temp.day }</td>
    <td>${ row.weather[0].main } (${ row.weather[0].description })</td>
</tr>
`.trim();
};

const getForecastTableBody = ( rowTemplateFunction, currentRow, lastRow, accumulator ) => 
    currentRow > lastRow ? accumulator :
    getForecastTableBody( 
        rowTemplateFunction, 
        currentRow + 1, 
        lastRow,
        `${ accumulator }\n${ rowTemplateFunction( currentRow ) }` 
    );

export const getForecastTable = 
    ( weather, timezone ) => 
    ( firstRow, lastRow ) => {
    const rowTemplate = getForecastRow( weather, timezone );
    const tableBody = getForecastTableBody( rowTemplate, firstRow, lastRow, '' );
    return `
<table>
<tr>
    <td>Date</td>
    <td>Temperature (C)</td>
    <td>Weather description</td>
</tr>
${ tableBody }
</table>    
`.trim();
};