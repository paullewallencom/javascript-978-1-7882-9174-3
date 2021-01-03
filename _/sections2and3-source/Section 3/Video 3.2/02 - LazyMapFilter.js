const lazyFilter = function *( iterable, filterFunction ) {
    for ( let elem of iterable ) {
        if ( filterFunction( elem ) ) yield elem;
    }
}

const lazyMap = function *( iterable, mapFunction ) {
    for ( let elem of iterable ) {
        yield mapFunction( elem );
    }
}

const names = [ 'takeshi', 'akari', 'hiroe', 'miyabi' ];
const capitalize = name => 
    name[0].toUpperCase() + name.slice( 1 );
const isFiveOrLessCharsLong = name => name.length <= 5;

const mapIterable = lazyMap( names, capitalize );
const filterIterator = lazyFilter( mapIterable, isFiveOrLessCharsLong );

console.log( filterIterator.next() );
console.log( filterIterator.next() );
console.log( filterIterator.next() );

const filterIterable2 = lazyFilter( names, isFiveOrLessCharsLong );
const mapIterator2 = lazyMap( filterIterable2, capitalize );

console.log( [...mapIterator2] );