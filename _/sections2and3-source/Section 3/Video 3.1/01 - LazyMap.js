const lazyMap = ( arr, mapFunction ) => {
    return {
        get: function( index ) {
            return mapFunction( arr[ index ] );
        },
        take: function( n ) {
            return arr.slice( 0, n ).map( mapFunction );
        },
        value: function() {
            return arr.map( mapFunction );
        }
    }
}

console.log( lazyMap( [1,2,3,4,5], x => x*2 ).value() );

const lazyList = lazyMap( [1,2,3,4,5], x => x*2 );
console.log( lazyList.take( 3 ) );
console.log( lazyList.take( 2 ) );

