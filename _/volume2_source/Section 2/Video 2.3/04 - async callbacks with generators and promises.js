// This file is for demo purposes only.
// Do not attempt to execute it.

const asyncSequence = function *() {
    const asyncPromise1 = new Promise( ( resolve, reject ) =>
        // ...
        resolve( callbackArg1 );
        // ...
    );
    const callbackArg1 = yield asyncPromise1;
    // ...  
    const asyncPromise2 = new Promise( ( resolve, reject ) => {
        // ...
        resolve( callbackArg2 );
        // ...
    } );   
    const callbackArg2 = yield asyncPromise2;
    // ...
    const asyncPromise3 = new Promise( ( resolve, reject ) => {
        // ...
        resolve( callbackArg3 );
        // ...
    } ); 
    const callbackArg3 = yield asyncPromise3;      
    // ... 
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