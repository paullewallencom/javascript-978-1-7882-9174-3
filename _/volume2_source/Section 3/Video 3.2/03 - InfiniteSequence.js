function *idGenerator() {
    let id = 0;
    while ( true ) yield id++;
}

const getId = idGenerator();

console.log( getId.next() );
console.log( getId.next() );

