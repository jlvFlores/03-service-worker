

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js');
}


fetch('http://reqres.in/api/users')
    .then( resp => resp.text() )
    .then( console.log );