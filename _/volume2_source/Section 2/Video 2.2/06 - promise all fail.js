const promisedGame = new Promise( ( resolve, reject ) => {
    setTimeout( () => { 
        resolve( 'Super JavaScript World' )
    }, 2000 );
    reject( new Error( 'Game is out of stock' ) );
} );
const promisedIce = Promise.resolve( 'Chocolate' );

Promise.all( [ promisedGame, promisedIce ] )
    .then( values => console.log( 'Values: ', values ) )
    .catch( error => console.log( 'Error: ', error.message ) );