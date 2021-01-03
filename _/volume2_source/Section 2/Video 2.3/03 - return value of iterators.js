const generator = function *() {
    const value = yield 1;
    yield value;
}

const it = generator();

console.log( it.next() );
console.log( it.next( 'VALUE' ) );