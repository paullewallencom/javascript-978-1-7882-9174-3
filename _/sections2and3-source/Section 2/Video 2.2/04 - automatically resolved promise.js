const giveMeIceCream = Promise.resolve( 'Chocolate' ).then( iceCream => {
    console.log( 'Flavour: ', iceCream );
} );