
// Ciclo de vida del SW

self.addEventListener('install', event => {
    console.log('SW: Instalando SW');

    const Instalacion = new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 1000);
    });

    event.waitUntil( Instalacion );

});

self.addEventListener('activate', event => {
    console.log('SW2: Activo y listo para controlar la app');
});

self.addEventListener('fetcha', event => {
    console.log('SW', event.request.url );

    if (event.request.url.includes('https://reqres.in/') ) {
        const resp = new Response(`{ok: false, mensaje: 'jajaja'}`);
    
        event.respondWith( resp );
    
    }
});