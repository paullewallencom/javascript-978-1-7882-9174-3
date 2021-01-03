const isLoggedIn = async () => true;
const getTopTenGoogleBooks = async x => x;
const renderBooks = x => { 
    console.log( `${ x } has been rendered.` ); 
};

const populateBooks = async user => {
    const isLogged = await isLoggedIn( user );
    if ( isLogged ) {
        const [ books1, books2 ] = await Promise.all( [
            getTopTenGoogleBooks( 'JavaScript' ),
            getTopTenGoogleBooks( 'PHP' )
        ] );
        renderBooks( books1 );
        renderBooks( books2 );
    }    
}

populateBooks( 'info@zsoltnagy.eu' )
    .then( () => console.log( 'done' ) )