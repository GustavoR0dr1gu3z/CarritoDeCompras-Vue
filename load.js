/*Solo hay un if, que pregunta si hay service worker en el navegador*/

if("serviceWorker" in navigator){
    navigator.serviceWorker.register('./ServiceWorker.js').then(
        reg => console.log('Registro del service worker', reg),

    ).catch(
        err => console.log('Error en el registro del service worker', err)
    );
}    