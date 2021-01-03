const daysGenerator = function *() {
    yield 'Sunday';
    yield 'Monday';
    yield 'Tuesday';
    yield 'Wednesday';
    yield 'Thursday';
    yield 'Friday';
    yield 'Saturday';
    return 'We are done';
};

const daysIterator = daysGenerator();

console.log( daysIterator.next() ); 
console.log( daysIterator.next() );
console.log( daysIterator.next() );
console.log( daysIterator.next() );
console.log( daysIterator.next() );
console.log( daysIterator.next() );
console.log( daysIterator.next() );
console.log( daysIterator.next() );

const daysIterable = daysGenerator();
console.log( [...daysIterable] );