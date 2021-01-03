const asyncSequence = async function() {
    const asyncPromise1 = new Promise( ( resolve, reject ) => {
        setTimeout( () => {resolve( '1' )}, 1000 );
    } );
    const callbackArg1 = await asyncPromise1;
    console.log( 'callbackArg1', callbackArg1 );
    const asyncPromise2 = new Promise( ( resolve, reject ) => {
        setTimeout( () => {resolve( '2' )}, 1000 );
    } );   
    const callbackArg2 = await asyncPromise2;
    console.log( 'callbackArg2', callbackArg2 );
    const asyncPromise3 = new Promise( ( resolve, reject ) => {
        setTimeout( () => {resolve( '3' )}, 1000 );
    } ); 
    const callbackArg3 = await asyncPromise3;      
    console.log( 'callbackArg3', callbackArg3 );
};

asyncSequence()
    .then( () => console.log( 'done' ) );