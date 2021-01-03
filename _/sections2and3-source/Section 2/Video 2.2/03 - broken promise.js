const giveMeIceCream = new Promise( function( resolve, reject ) {
    reject( new Error( 'No shop was found' ) );
} );

giveMeIceCream.then( iceCream => { 
    console.log( 'Thank you for giving me ', iceCream ); 
    return 'I am full now.';
} ).then( statusMessage => {
    throw new Error( 'I wanted strawberry, not chocolate!' );
} ).catch( error => {
    console.log( 'Problem: ', error.message ); 
    return 'I want cake!';
} );