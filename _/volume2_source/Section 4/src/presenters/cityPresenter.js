import { getTodaysTemplate, getForecastTable } from '../utils/parser.js';

const renderForecast = ( forecastTemplate, firstIndex, lastIndex ) => {
    const tableMarkup = forecastTemplate( firstIndex, lastIndex );
    const containerNode = document.querySelector( '.js-forecast' );
    if ( containerNode ) containerNode.innerHTML = tableMarkup;
};

export const renderCity = ( { today, forecast, timezoneResponse } ) => {
    const domElement = document.querySelector( '.js-city-weather' );
    const todayData = getTodaysTemplate( today, timezoneResponse );
    let firstPage = 0;
    const numOfPages = 5;

    domElement.innerHTML = `
        ${ todayData }
        <button class="js-up  up-button">Up</button>
        <div class="js-forecast"></div>
        <button class="js-down  up-button">Down</button>`;

    const forecastTemplate = getForecastTable( forecast, timezoneResponse );
    const wrappedRenderForecast = () => 
        renderForecast( forecastTemplate, firstPage, firstPage + numOfPages - 1 );    
    wrappedRenderForecast();

    const moveUp = () => {
        firstPage = Math.max( 0, firstPage - 1 );
        wrappedRenderForecast();
    };
    const moveDown = () => {
        firstPage = Math.min( 10, firstPage + 1 );
        wrappedRenderForecast();
    };

    document.querySelector( '.js-up' )
        .addEventListener( 'click', moveUp );
    document.querySelector( '.js-down' )
        .addEventListener( 'click', moveDown );
};
