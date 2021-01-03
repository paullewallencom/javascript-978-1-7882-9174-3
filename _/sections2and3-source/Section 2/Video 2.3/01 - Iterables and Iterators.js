const str = 'Iterators';

console.log( [...str] ); // iterable object

// iterator
const stringIterator = str[Symbol.iterator]();
for ( let i = 0; i < 10; ++i ) {
    console.log( stringIterator.next() );
}
