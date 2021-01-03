const giveMeIceCream = new Promise( function( resolve, reject ) {
    resolve( 'Chocolate' );
} );

giveMeIceCream.then( iceCream => { 
    console.log( 'Thank you for giving me ', iceCream ); 
    return 'I am full now.';
} ).then( statusMessage => {
    console.log( 'Status message ', statusMessage );
} );