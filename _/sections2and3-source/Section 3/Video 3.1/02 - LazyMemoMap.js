const lazyMemoMap = ( arr, mapFunction ) => {
    const memo = [];
    return {
        get: function( index ) {
            if ( memo[ index ] ) return memo[ index ];
            const result = mapFunction( arr[ index ] );
            memo[ index ] = result;
            return result;
        },
        getMemo: function() {
            return memo;
        }
    }
}

const lazyArray = lazyMemoMap( [1,2,3,4,5], x => x*2 )

console.log( lazyArray.get( 1 ) );
console.log( lazyArray.get( 4 ) );
console.log( lazyArray.getMemo() );
