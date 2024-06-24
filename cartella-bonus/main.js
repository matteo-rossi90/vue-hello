/*Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.*/

//richiamare l'API di Vue CreateApp

const { createApp } = Vue;

//creare un messaggio da stampre in DOM

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            image: 'https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM'
        }
    }
}).mount('#container');






