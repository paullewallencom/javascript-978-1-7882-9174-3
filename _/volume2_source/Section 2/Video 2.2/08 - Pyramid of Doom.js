// This file is for demo purposes only.
// Do not attempt to execute it.

asyncFunction1( callbackArg1 => {
    // ...
    asyncFunction2( callbackArg2 => {
        // ...
        asyncFunction3( callbackArg3 => {
            // ...
        } );
    } );
} );