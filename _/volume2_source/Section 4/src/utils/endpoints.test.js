import { expect } from 'chai';
import { WEATHER_API_KEY, GOOGLE_TIMEZONE_API_KEY } from '../constants/const.js';
import { 
    getParamString,
    getOpenWeatherMapUrl,
    getTimezoneUrl
} from './endpoints';

describe( 'Endpoints', () => {
    it( 'should translate undefined and {} into an empty param string', () => {
        expect( getParamString() ).to.equal( '' );
        expect( getParamString( {} ) ).to.equal( '' ); 
    } );
    it( 'should translate an object into a param string', () => {
        const params = {
            key1: 'value1',
            key2: 'value2'
        };
        const result = '&key1=value1&key2=value2';
        expect( getParamString( params ) ).to.equal( result );
    } );
    it( 'should assemble the weather endpoint URL with params', () => {
        const params = {
            key1: 'value1',
            key2: 'value2'
        };

        const url = getOpenWeatherMapUrl( 'endpoint' )( params )( 'city' );

        const prefix = 'http://api.openweathermap.org/data/2.5/';
        const paramString = getParamString( params );
        const result = `${prefix}endpoint?q=city&appid=${WEATHER_API_KEY}${paramString}`;

        expect( url ).to.equal( result );        
    } );
    it( 'should assemble the google timezone API query', () => {

        const lon = 153.03;
        const lat = -27.47;
        const timestamp = 1494780000;
        const url = 
            getTimezoneUrl( lat, lon )( timestamp );

        const prefix = 'https://maps.googleapis.com/maps/api/timezone/json?location=';
        const result = `${prefix}${lat},${lon}&timestamp=${timestamp}&key=${GOOGLE_TIMEZONE_API_KEY}`;

        expect( url ).to.equal( result );
    } );
} );

// http://api.openweathermap.org/data/2.5/weather?q=Brisbane&appid=b8bffe1d7ed810538b0bbdb3af3fe14b&units=metric
// http://api.openweathermap.org/data/2.5/forecast/daily?q=Brisbane&appid=b8bffe1d7ed810538b0bbdb3af3fe14b&units=metric&cnt=16