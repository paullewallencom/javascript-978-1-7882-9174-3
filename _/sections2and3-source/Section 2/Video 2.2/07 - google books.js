// Open jQuery.com in the browser, and execute the code in the dev tools console.

document.querySelector( 'body' ).innerHTML = `
    <input type="text" class="js-book-title"></input>
    <button class="js-get-books">Get Data</button>
    <ul class="js-search-results"></ul>
    <h3>Preview:</h3>
    <div class="book-img-preview"></div>`;

document.querySelector( '.js-get-books' )
    .addEventListener( 'click', loadBooks );

function loadBooks() {
    const title = encodeURIComponent( 
        $( '.js-book-title' ).val() 
    );
    new Promise( ( resolve, reject ) => {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${title}`;
        $.get( url, resp => resolve( resp ) );
    } ).then( resp => {
        const items = resp.items.map( book => `
            <li data-thumbnail="${ 
                 book.volumeInfo.imageLinks ? 
                 book.volumeInfo.imageLinks.thumbnail : '' }">
                ${ book.volumeInfo.title }
            </li>` ).join( '\n' );
        document.querySelector( '.js-search-results' ) 
            .innerHTML = items;       
    } ).then( () => {
        document.querySelectorAll( '.js-search-results li' )
            .forEach( node => {
                node.addEventListener( 'click', displayBook );
            } );
    } );
}

function displayBook( event ) {
    const src = event.target.getAttribute( 'data-thumbnail' );
    document.querySelector( '.book-img-preview' )
        .innerHTML = `<img src="${ src }" />`;
}