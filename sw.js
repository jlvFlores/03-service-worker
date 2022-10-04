
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