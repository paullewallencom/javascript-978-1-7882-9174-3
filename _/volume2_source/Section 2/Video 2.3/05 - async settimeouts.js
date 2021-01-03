const asyncSequence = function *() {
    const asyncPromise1 = new Promise( ( resolve, reject ) => {
        setTimeout( () => {resolve( '1' )}, 1000 );
    } );
    const callbackArg1 = yield asyncPromise1;
    console.log( 'callbackArg1', callbackArg1 );
    const asyncPromise2 = new Promise( ( resolve, reject ) => {
        setTimeout( () => {resolve( '2' )}, 1000 );
    } );   
    const callbackArg2 = yield asyncPromise2;
    console.log( 'callbackArg2', callbackArg2 );
    const asyncPromise3 = new Promise( ( resolve, reject ) => {
        setTimeout( () => {resolve( '3' )}, 1000 );
    } ); 
    const callbackArg3 = yield asyncPromise3;      
    console.log( 'callbackArg3', callbackArg3 );
};

const asyncIterator = asyncSequence();

asyncIterator.next().value
    .then( callbackArg1 => 
        asyncIterator.next( callbackArg1 ).value 
    ).then( callbackArg2 => 
        asyncIterator.next( callbackArg2 ).value 
    ).then( callbackArg3 => 
        asyncIterator.next( callbackArg3 ).value 
    );