const lazyFilter = function *( iterable, filterFunction ) {
    for ( let elem of iterable ) {
        if ( filterFunction( elem ) ) yield elem;
    }
}

const lazySequence = lazyFilter( [1, 2, 3, 4, 5], x => x%2 === 0 );

console.log( lazySequence.next().value );
console.log( lazySequence.next().value );
console.log( lazySequence.next() );


