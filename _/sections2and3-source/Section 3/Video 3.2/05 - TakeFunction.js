function *idGenerator() {
    let id = 0;
    while ( true ) yield id++;
}

const getId = idGenerator();

function take( iterator, numberOfItems ) {
    let result = [];
    for ( let i = 0; i < numberOfItems; ++i ) {
        const { value, done } = iterator.next();
        if ( done ) return result;
        result.push( value );
    }
    return result;
}

console.log( take( getId, 10 ) );