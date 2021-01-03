import { expect } from 'chai';
import {
    getCity,
    getCountry,
    getWeatherData,
    getTodaysTemperatures,
    getSunriseSunset,
    getTodaysTemplate,
    getForecastRow,
    getForecastTable
} from './parser';

describe( 'Parser util', () => {
    it ( 'should return the city', () => {
        expect( getCity( { name: 'City' } ) ).to.equal( 'City' );           
    } );
    it ( 'should return the country', () => {
        expect( getCountry( {
            sys: {
                country: 'COUNTRY_CODE'
            }
        } ) ).to.equal( 'COUNTRY_CODE' );
    } );
    it ( 'should return the weather condition and description', () => {
        const input = {
            weather: [
                {
                    main: 'Clouds',
                    description: 'scattered clouds'
                }
            ]
        };  
        const response = 'Clouds (scattered clouds)';

        expect( getWeatherData( input ) ).to.equal( response );
    } );
    it ( 'should return todays temperatures', () => {
        const input = {
            main: {
                temp: 20,
                temp_min: 18,
                temp_max: 22
            }
        };
        const response = 'Temperature (min, average, max): 18, 20, 22';

        expect( getTodaysTemperatures( input ) ).to.equal( response );
    } );
    it( 'should return the sunrise and sunset', () => {
        const weatherInput = {
            sys: {
                sunrise: 1494966143,
                sunset: 1495004757
            }
        };
        const timezoneInput = {
            timeZoneId: 'Australia/Brisbane'
        };

        const response = 'Sunrise: 06:22, Sunset: 17:05';

        expect( getSunriseSunset( weatherInput, timezoneInput ) )
            .to.equal( response );
    } );
    it ( 'should return the full template for today', () => {
        const weatherInput = {
            main: {
                temp: 20,
                temp_min: 18,
                temp_max: 22
            },
            weather: [
                {
                    main: 'Clouds',
                    description: 'scattered clouds'
                }
            ],
            sys: {
                country: 'COUNTRY_CODE',
                sunrise: 1494966143,
                sunset: 1495004757                
            },
            name: 'City'          
        };   
        const timezoneInput = {
            timeZoneId: 'Australia/Brisbane'
        }

        const response = `
<div>City, COUNTRY_CODE: Clouds (scattered clouds)</div>
<div>Temperature (min, average, max): 18, 20, 22</div>
<div>Sunrise: 06:22, Sunset: 17:05</div>`.trim();  

        expect( getTodaysTemplate( weatherInput, timezoneInput ) )
            .to.equal( response );      
    } );
    it( 'should return a forecast row', () => {
        const forecastResponse = {
            list: [ {
                dt: 1497661200,
                temp: { day: 20 },
                weather: [ {
                    main: 'Sunny',
                    description: 'sky is clear'
                } ]
            },
            { 
                dt: 1497747600,
                temp: { day: 16 },
                weather: [ {
                    main: 'Clouds',
                    description: 'broken clouds'
                } ]
            } ]
        };
        const timezoneResponse = {
            timeZoneId: 'Australia/Brisbane'
        }; 

        const firstRow = getForecastRow( forecastResponse, timezoneResponse )( 0 );
        const secondRow = getForecastRow( forecastResponse, timezoneResponse )( 1 );

        const expectedFirstRow = `
<tr>
    <td>Jun 17th</td>
    <td>20</td>
    <td>Sunny (sky is clear)</td>
</tr>`.trim();
        const expectedSecondRow = `
<tr>
    <td>Jun 18th</td>
    <td>16</td>
    <td>Clouds (broken clouds)</td>
</tr>`.trim();

        expect( firstRow ).to.equal( expectedFirstRow );
        expect( secondRow ).to.equal( expectedSecondRow );        

    } );
    it( 'should return the full forecast table', () => {
        const forecastResponse = {
            list: [ {
                dt: 1497661200,
                temp: { day: 20 },
                weather: [ {
                    main: 'Sunny',
                    description: 'sky is clear'
                } ]
            },
            { 
                dt: 1497747600,
                temp: { day: 16 },
                weather: [ {
                    main: 'Clouds',
                    description: 'broken clouds'
                } ]
            } 
        ] };
        const timezoneResponse = {
            timeZoneId: 'Australia/Brisbane'
        };  

        const table = getForecastTable( forecastResponse, timezoneResponse )( 0, 1 );

        const expectedResult = `
<table>
<tr>
    <td>Date</td>
    <td>Temperature (C)</td>
    <td>Weather description</td>
</tr>

<tr>
    <td>Jun 17th</td>
    <td>20</td>
    <td>Sunny (sky is clear)</td>
</tr>
<tr>
    <td>Jun 18th</td>
    <td>16</td>
    <td>Clouds (broken clouds)</td>
</tr>
</table>
`.trim();

        expect( table ).to.equal( expectedResult );                           
    } );
} );

