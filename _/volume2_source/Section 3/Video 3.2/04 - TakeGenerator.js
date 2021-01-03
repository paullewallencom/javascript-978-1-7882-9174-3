function *idGenerator() {
    let id = 0;
    while ( true ) yield id++;
}

const getId = idGenerator();

function *take( iterator, numberOfItems ) {
    for ( let i = 0; i < numberOfItems; ++i ) {
        const { value, done } = iterator.next();
        if ( done ) {
            return value;
        }
        yield value;
    }
}

console.log( [...take( getId, 5 )] );

